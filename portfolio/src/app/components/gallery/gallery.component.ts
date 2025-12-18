import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Gallery</span>
        </h2>

        <p class="section-subtitle">Moments from projects, events, and development journey.</p>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div
            class="gallery-item fade-in"
            *ngFor="let item of galleryItems; let i = index"
            [class.large]="i === 0 || i === 5"
            (click)="openLightbox(item)"
          >
            <div class="item-placeholder">
              <span class="item-icon">{{ item.icon }}</span>
            </div>

            <div class="item-overlay">
              <h4>{{ item.title }}</h4>
              <span class="item-category">{{ item.category }}</span>
            </div>
          </div>
        </div>

        <!-- Lightbox -->
        <div class="lightbox" *ngIf="selectedItem" (click)="closeLightbox()">
          <button class="lightbox-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="lightbox-content" (click)="$event.stopPropagation()">
            <div class="lightbox-image">
              <span class="lightbox-icon">{{ selectedItem.icon }}</span>
            </div>
            <div class="lightbox-info">
              <h3>{{ selectedItem.title }}</h3>
              <span>{{ selectedItem.category }}</span>
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
        margin: -40px auto 50px;
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 200px;
        gap: 20px;
      }

      .gallery-item {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.4s ease;
      }

      .gallery-item:hover {
        transform: scale(1.03);
        z-index: 10;
      }

      .gallery-item.large {
        grid-column: span 2;
        grid-row: span 2;
      }

      .item-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--color-navy-light), var(--color-navy-lighter));
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 212, 255, 0.1);
      }

      .item-icon {
        font-size: 3rem;
        opacity: 0.5;
      }

      .gallery-item.large .item-icon {
        font-size: 5rem;
      }

      .item-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 25px;
        background: linear-gradient(transparent, rgba(10, 25, 47, 0.95));
        transform: translateY(100%);
        transition: transform 0.4s ease;
      }

      .gallery-item:hover .item-overlay {
        transform: translateY(0);
      }

      .item-overlay h4 {
        color: var(--color-text);
        font-size: 1.1rem;
        margin-bottom: 5px;
      }

      .item-category {
        color: var(--color-cyan);
        font-size: 0.85rem;
        font-family: 'Fira Code', monospace;
      }

      /* Lightbox */
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(10, 25, 47, 0.95);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
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

      .lightbox-close {
        position: absolute;
        top: 30px;
        right: 30px;
        background: none;
        border: none;
        color: var(--color-text);
        cursor: pointer;
        transition: color 0.3s ease;
      }

      .lightbox-close:hover {
        color: var(--color-cyan);
      }

      .lightbox-content {
        text-align: center;
      }

      .lightbox-image {
        width: 400px;
        height: 400px;
        max-width: 90vw;
        max-height: 60vh;
        background: linear-gradient(135deg, var(--color-navy-light), var(--color-navy-lighter));
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        border: 1px solid rgba(0, 212, 255, 0.2);
      }

      .lightbox-icon {
        font-size: 8rem;
        opacity: 0.6;
      }

      .lightbox-info h3 {
        font-size: 1.5rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .lightbox-info span {
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      @media (max-width: 1024px) {
        .gallery-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 768px) {
        .gallery-grid {
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 150px;
        }

        .gallery-item.large {
          grid-column: span 2;
          grid-row: span 1;
        }
      }

      @media (max-width: 480px) {
        .gallery-grid {
          grid-template-columns: 1fr;
          grid-auto-rows: 180px;
        }

        .gallery-item.large {
          grid-column: span 1;
        }
      }
    `,
  ],
})
export class GalleryComponent {
  selectedItem: GalleryItem | null = null;

  galleryItems: GalleryItem[] = [
    { title: 'Telepaty Development', category: 'Project', icon: '💬' },
    { title: 'Coding Session', category: 'Development', icon: '💻' },
    { title: 'Tech Workshop', category: 'Event', icon: '🎓' },
    { title: 'YouTube Clone UI', category: 'Project', icon: '▶️' },
    { title: 'Team Collaboration', category: 'Development', icon: '👥' },
    { title: 'Competition Award', category: 'Achievement', icon: '🏆' },
    { title: 'File Destroyer Demo', category: 'Project', icon: '🔒' },
    { title: 'AI/ML Research', category: 'Learning', icon: '🤖' },
  ];

  openLightbox(item: GalleryItem) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }
}
