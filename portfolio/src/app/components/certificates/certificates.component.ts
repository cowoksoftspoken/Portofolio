import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  type: 'certificate' | 'exhibition';
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
            All
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'certificate'"
            (click)="setFilter('certificate')"
          >
            Certificates
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'exhibition'"
            (click)="setFilter('exhibition')"
          >
            Exhibitions
          </button>
        </div>

        <!-- Certificates Grid -->
        <div class="certificates-grid">
          <div
            class="certificate-card glass-card fade-in"
            *ngFor="let cert of filteredCertificates"
            (click)="openModal(cert)"
          >
            <!-- Glow Border -->
            <div class="glow-border-wrapper">
              <div class="certificate-content">
                <!-- Icon -->
                <div class="cert-icon" [class.exhibition]="cert.type === 'exhibition'">
                  <svg
                    *ngIf="cert.type === 'certificate'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                    width="32"
                    height="32"
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
                <h3 class="cert-title">{{ cert.title }}</h3>
                <p class="cert-issuer">{{ cert.issuer }}</p>
                <span class="cert-date">{{ cert.date }}</span>

                <!-- Type Badge -->
                <span class="cert-type" [class.exhibition]="cert.type === 'exhibition'">
                  {{ cert.type === 'certificate' ? '📜 Certificate' : '🏆 Exhibition' }}
                </span>
              </div>
            </div>

            <!-- Hover Effect -->
            <div class="card-shine"></div>
          </div>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="filteredCertificates.length === 0">
          <p>No items to display in this category.</p>
        </div>

        <!-- Modal -->
        <div class="modal-overlay" *ngIf="selectedCertificate" (click)="closeModal()">
          <div class="modal-content glass-card" (click)="$event.stopPropagation()">
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

            <div class="modal-icon" [class.exhibition]="selectedCertificate.type === 'exhibition'">
              <svg
                *ngIf="selectedCertificate.type === 'certificate'"
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
              <svg
                *ngIf="selectedCertificate.type === 'exhibition'"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
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

            <h3>{{ selectedCertificate.title }}</h3>
            <p class="modal-issuer">{{ selectedCertificate.issuer }}</p>
            <p class="modal-date">{{ selectedCertificate.date }}</p>
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
        gap: 15px;
        margin-bottom: 50px;
      }

      .filter-btn {
        padding: 12px 28px;
        border: 1px solid rgba(0, 212, 255, 0.3);
        background: transparent;
        color: var(--color-text-muted);
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.95rem;
      }

      .filter-btn:hover {
        border-color: var(--color-cyan);
        color: var(--color-cyan);
      }

      .filter-btn.active {
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border-color: transparent;
        color: white;
      }

      .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
      }

      .certificate-card {
        position: relative;
        padding: 3px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(124, 58, 237, 0.3));
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.4s ease;
      }

      .certificate-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
      }

      .glow-border-wrapper {
        background: var(--color-navy-light);
        border-radius: 18px;
        padding: 30px;
        height: 100%;
      }

      .certificate-content {
        text-align: center;
      }

      .cert-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .cert-icon.exhibition {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
        color: #ffd700;
      }

      .cert-title {
        font-size: 1.15rem;
        color: var(--color-text);
        margin-bottom: 10px;
        font-weight: 600;
      }

      .cert-issuer {
        color: var(--color-text-muted);
        font-size: 0.95rem;
        margin-bottom: 8px;
      }

      .cert-date {
        color: var(--color-cyan);
        font-size: 0.85rem;
        font-family: 'Fira Code', monospace;
      }

      .cert-type {
        display: inline-block;
        margin-top: 15px;
        padding: 6px 14px;
        background: rgba(0, 212, 255, 0.1);
        border-radius: 15px;
        font-size: 0.8rem;
        color: var(--color-cyan);
      }

      .cert-type.exhibition {
        background: rgba(255, 215, 0, 0.1);
        color: #ffd700;
      }

      .card-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
        pointer-events: none;
      }

      .certificate-card:hover .card-shine {
        left: 100%;
      }

      .empty-state {
        text-align: center;
        padding: 60px;
        color: var(--color-text-muted);
      }

      /* Modal */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(10, 25, 47, 0.9);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
      }

      .modal-content {
        max-width: 450px;
        width: 100%;
        padding: 50px;
        text-align: center;
        position: relative;
        animation: modalIn 0.3s ease;
      }

      @keyframes modalIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: var(--color-text-muted);
        cursor: pointer;
        transition: color 0.3s ease;
      }

      .modal-close:hover {
        color: var(--color-cyan);
      }

      .modal-icon {
        width: 100px;
        height: 100px;
        margin: 0 auto 25px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .modal-icon.exhibition {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
        color: #ffd700;
      }

      .modal-content h3 {
        font-size: 1.5rem;
        color: var(--color-text);
        margin-bottom: 15px;
      }

      .modal-issuer {
        color: var(--color-text-muted);
        margin-bottom: 10px;
      }

      .modal-date {
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      @media (max-width: 640px) {
        .filter-tabs {
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          font-size: 0.85rem;
        }
      }
    `,
  ],
})
export class CertificatesComponent {
  activeFilter: 'all' | 'certificate' | 'exhibition' = 'all';
  selectedCertificate: Certificate | null = null;

  certificates: Certificate[] = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'Online Learning Platform',
      date: '2024',
      type: 'certificate',
    },
    {
      title: 'JavaScript Advanced Concepts',
      issuer: 'Tech Academy',
      date: '2024',
      type: 'certificate',
    },
    {
      title: 'Regional Tech Competition',
      issuer: 'SMK Tech Event',
      date: '2023',
      type: 'exhibition',
    },
    {
      title: 'Software Development Workshop',
      issuer: 'Industry Partner',
      date: '2023',
      type: 'certificate',
    },
    {
      title: 'IT Expo Participant',
      issuer: 'National IT Exhibition',
      date: '2023',
      type: 'exhibition',
    },
    {
      title: 'Python Programming',
      issuer: 'Coding Bootcamp',
      date: '2022',
      type: 'certificate',
    },
  ];

  get filteredCertificates(): Certificate[] {
    if (this.activeFilter === 'all') {
      return this.certificates;
    }
    return this.certificates.filter((c) => c.type === this.activeFilter);
  }

  setFilter(filter: 'all' | 'certificate' | 'exhibition') {
    this.activeFilter = filter;
  }

  openModal(cert: Certificate) {
    this.selectedCertificate = cert;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCertificate = null;
    document.body.style.overflow = '';
  }
}
