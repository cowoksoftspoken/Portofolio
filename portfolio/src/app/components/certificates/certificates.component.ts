import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  type: 'certificate' | 'exhibition';
  pdfUrl?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certificates" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Certificates & Exhibitions</span>
        </h2>

        <p class="section-subtitle">
          Achievements and recognitions from various events and learning platforms.
        </p>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            All
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'certificate'"
            (click)="setFilter('certificate')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Certificates
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'exhibition'"
            (click)="setFilter('exhibition')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            Exhibitions
          </button>
        </div>

        <!-- Certificates Grid -->
        <div class="certificates-grid">
          <div
            class="certificate-card cert-animate"
            *ngFor="let cert of displayedCertificates; let i = index"
            [class.certificate-type]="cert.type === 'certificate'"
            [class.exhibition-type]="cert.type === 'exhibition'"
            [style.animation-delay]="i * 0.08 + 's'"
            (click)="openModal(cert)"
          >
            <!-- Icon -->
            <div class="cert-icon" [class.exhibition]="cert.type === 'exhibition'">
              <svg
                *ngIf="cert.type === 'certificate'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <svg
                *ngIf="cert.type === 'exhibition'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>

            <!-- Info -->
            <div class="cert-info">
              <h3 class="cert-title">{{ cert.title }}</h3>
              <p class="cert-issuer">{{ cert.issuer }}</p>
            </div>

            <!-- Footer -->
            <div class="cert-footer">
              <span class="cert-date">{{ cert.date }}</span>
              <span class="cert-type-badge" [class.exhibition]="cert.type === 'exhibition'">
                <svg
                  *ngIf="cert.type === 'certificate' && cert.pdfUrl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="margin-right: 4px;"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                </svg>
                {{
                  cert.type === 'certificate'
                    ? cert.pdfUrl
                      ? 'View PDF'
                      : 'Certificate'
                    : 'Exhibition'
                }}
              </span>
            </div>
          </div>
        </div>

        <!-- View More Button -->
        <div class="view-more-container" *ngIf="hasMoreItems">
          <button class="view-more-btn" (click)="toggleShowAll()">
            <span>{{ showAll ? 'Show Less' : 'View More' }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              [class.rotated]="showAll"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="filteredCertificates.length === 0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          <p>No items to display in this category.</p>
        </div>

        <!-- PDF Preview Modal -->
        <div class="modal-overlay" *ngIf="selectedCertificate" (click)="closeModal()">
          <div
            class="modal-content"
            [class.pdf-modal]="selectedCertificate.pdfUrl"
            (click)="$event.stopPropagation()"
          >
            <button class="modal-close" (click)="closeModal()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <!-- PDF Preview -->
            <div *ngIf="selectedCertificate.pdfUrl" class="pdf-container">
              <iframe
                [src]="getSafeUrl(selectedCertificate.pdfUrl)"
                class="pdf-viewer"
                title="Certificate PDF"
              ></iframe>
              <div class="pdf-actions">
                <a [href]="selectedCertificate.pdfUrl" target="_blank" class="pdf-action-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open in New Tab
                </a>
                <a [href]="selectedCertificate.pdfUrl" download class="pdf-action-btn download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            <!-- Exhibition Placeholder -->
            <div
              *ngIf="selectedCertificate.type === 'exhibition' && !selectedCertificate.pdfUrl"
              class="exhibition-placeholder"
            >
              <div class="placeholder-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              </div>
              <h3>{{ selectedCertificate.title }}</h3>
              <p class="placeholder-issuer">{{ selectedCertificate.issuer }}</p>
              <div class="placeholder-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Will be updated</span>
              </div>
            </div>

            <!-- Certificate without PDF -->
            <div
              *ngIf="selectedCertificate.type === 'certificate' && !selectedCertificate.pdfUrl"
              class="certificate-placeholder"
            >
              <div class="modal-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3>{{ selectedCertificate.title }}</h3>
              <p class="modal-issuer">{{ selectedCertificate.issuer }}</p>
              <p class="modal-date">{{ selectedCertificate.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .section-subtitle {
        text-align: center;
        color: var(--color-text-muted);
        font-size: 1.1rem;
        max-width: 600px;
        margin: -40px auto 40px;
      }

      .filter-tabs {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-bottom: 50px;
        flex-wrap: wrap;
      }

      .filter-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border: 1px solid rgba(0, 212, 255, 0.2);
        background: rgba(17, 34, 64, 0.5);
        color: var(--color-text-muted);
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .filter-btn:hover {
        border-color: var(--color-cyan);
        color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.05);
      }

      .filter-btn.active {
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border-color: transparent;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
      }

      .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
      }

      .certificate-card {
        background: rgba(17, 34, 64, 0.6);
        border: 1px solid rgba(0, 212, 255, 0.1);
        border-radius: 20px;
        padding: 28px;
        cursor: pointer;
        transition: all 0.4s ease;
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
        overflow: hidden;
      }

      .certificate-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-cyan), var(--color-purple));
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .certificate-card.certificate-type::before {
        background: linear-gradient(90deg, var(--color-cyan), var(--color-purple));
      }

      .certificate-card.exhibition-type::before {
        background: linear-gradient(90deg, #ffd700, #ff8c00);
      }

      .certificate-card:hover {
        transform: translateY(-8px);
        border-color: rgba(0, 212, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .certificate-card:hover::before {
        opacity: 1;
      }

      .cert-animate {
        animation: certFadeIn 0.5s ease-out forwards;
        opacity: 0;
      }

      @keyframes certFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .cert-icon {
        width: 56px;
        height: 56px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .cert-icon.exhibition {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.15));
        color: #ffd700;
      }

      .cert-info {
        flex: 1;
      }

      .cert-title {
        font-size: 1.1rem;
        color: var(--color-text);
        margin-bottom: 6px;
        font-weight: 600;
        line-height: 1.4;
      }

      .cert-issuer {
        color: var(--color-text-muted);
        font-size: 0.9rem;
      }

      .cert-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        border-top: 1px solid rgba(0, 212, 255, 0.1);
      }

      .cert-date {
        color: var(--color-text-muted);
        font-size: 0.85rem;
        font-family: 'Fira Code', monospace;
      }

      .cert-type-badge {
        display: flex;
        align-items: center;
        padding: 6px 14px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 20px;
        font-size: 0.75rem;
        color: var(--color-cyan);
        font-weight: 500;
      }

      .cert-type-badge.exhibition {
        background: rgba(255, 215, 0, 0.1);
        border-color: rgba(255, 215, 0, 0.3);
        color: #ffd700;
      }

      .view-more-container {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }

      .view-more-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 32px;
        background: transparent;
        border: 2px solid var(--color-cyan);
        color: var(--color-cyan);
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .view-more-btn:hover {
        background: rgba(0, 212, 255, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
      }

      .view-more-btn svg {
        transition: transform 0.3s ease;
      }

      .view-more-btn svg.rotated {
        transform: rotate(180deg);
      }

      .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: var(--color-text-muted);
      }

      .empty-state svg {
        margin-bottom: 20px;
        opacity: 0.5;
      }

      /* Modal */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(10, 25, 47, 0.95);
        backdrop-filter: blur(15px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-content {
        max-width: 420px;
        width: 100%;
        padding: 50px 40px;
        text-align: center;
        position: relative;
        background: rgba(17, 34, 64, 0.9);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 24px;
        animation: modalIn 0.3s ease;
      }

      .modal-content.pdf-modal {
        max-width: 900px;
        max-height: 90vh;
        padding: 20px;
      }

      @keyframes modalIn {
        from {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      .modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(0, 212, 255, 0.1);
        border: none;
        color: var(--color-text-muted);
        cursor: pointer;
        padding: 8px;
        border-radius: 10px;
        transition: all 0.3s ease;
        z-index: 10;
      }

      .modal-close:hover {
        color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.2);
      }

      /* PDF Container */
      .pdf-container {
        display: flex;
        flex-direction: column;
        height: 75vh;
        gap: 16px;
      }

      .pdf-viewer {
        flex: 1;
        width: 100%;
        border: none;
        border-radius: 12px;
        background: white;
      }

      .pdf-actions {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .pdf-action-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 25px;
        color: var(--color-cyan);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .pdf-action-btn:hover {
        background: rgba(0, 212, 255, 0.2);
        transform: translateY(-2px);
      }

      .pdf-action-btn.download {
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border: none;
        color: white;
      }

      .pdf-action-btn.download:hover {
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
      }

      /* Exhibition Placeholder */
      .exhibition-placeholder {
        padding: 40px 20px;
      }

      .placeholder-icon {
        width: 100px;
        height: 100px;
        margin: 0 auto 25px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.15));
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffd700;
      }

      .exhibition-placeholder h3 {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .placeholder-issuer {
        color: var(--color-text-muted);
        margin-bottom: 25px;
      }

      .placeholder-message {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 28px;
        background: rgba(255, 215, 0, 0.1);
        border: 1px dashed rgba(255, 215, 0, 0.4);
        border-radius: 30px;
        color: #ffd700;
        font-weight: 500;
      }

      /* Certificate Placeholder */
      .certificate-placeholder {
        padding: 20px;
      }

      .modal-icon {
        width: 90px;
        height: 90px;
        margin: 0 auto 25px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .certificate-placeholder h3 {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 12px;
      }

      .modal-issuer {
        color: var(--color-text-muted);
        margin-bottom: 8px;
      }

      .modal-date {
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      @media (max-width: 768px) {
        .certificates-grid {
          grid-template-columns: 1fr;
        }

        .filter-btn {
          padding: 10px 18px;
          font-size: 0.85rem;
        }

        .modal-content.pdf-modal {
          padding: 15px;
          max-height: 85vh;
        }

        .pdf-container {
          height: 65vh;
        }

        .pdf-actions {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class CertificatesComponent {
  private sanitizer = inject(DomSanitizer);

  activeFilter: 'all' | 'certificate' | 'exhibition' = 'all';
  selectedCertificate: Certificate | null = null;
  showAll = false;
  itemsToShow = 6;

  certificates: Certificate[] = [
    {
      title: 'Learn AI Basics',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      type: 'certificate',
      pdfUrl: 'certificate/sertifikat_course_653_4338513_051025183825.pdf',
    },
    {
      title: 'Starting Programming with Python',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      type: 'certificate',
      pdfUrl: 'certificate/sertifikat_course_86_4338513_281024223659.pdf',
    },
    {
      title: 'Axioo Class Program #2 - Computer Maintenance',
      issuer: 'Axioo',
      date: '2025',
      type: 'certificate',
      pdfUrl: 'certificate/-certificate-29-05-2025-07-05-13.pdf',
    },
    {
      title: 'Axioo Class Program #1 - Hardware Fundamentals',
      issuer: 'Axioo',
      date: '2025',
      type: 'certificate',
      pdfUrl: 'certificate/-certificate-29-05-2025-07-05-57.pdf',
    },
    {
      title: 'TOEFL Certificate (Score: 550)',
      issuer: 'LBA Ganesha Yogyakarta',
      date: '2024',
      type: 'certificate',
      pdfUrl: 'certificate/document.pdf',
    },
    {
      title: 'Exhibition Coming Soon',
      issuer: 'Will be updated',
      date: '2025',
      type: 'exhibition',
    },
  ];

  get filteredCertificates(): Certificate[] {
    if (this.activeFilter === 'all') {
      return this.certificates;
    }
    return this.certificates.filter((c) => c.type === this.activeFilter);
  }

  get displayedCertificates(): Certificate[] {
    return this.showAll
      ? this.filteredCertificates
      : this.filteredCertificates.slice(0, this.itemsToShow);
  }

  get hasMoreItems(): boolean {
    return this.filteredCertificates.length > this.itemsToShow;
  }

  setFilter(filter: 'all' | 'certificate' | 'exhibition') {
    this.activeFilter = filter;
    this.showAll = false;
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  openModal(cert: Certificate) {
    this.selectedCertificate = cert;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCertificate = null;
    document.body.style.overflow = '';
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
