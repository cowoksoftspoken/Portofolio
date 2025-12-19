import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  category: string;
  imageUrl: string;
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

        <!-- Coming Soon Notice -->
        <div class="update-notice">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Gallery will be updated soon with more content</span>
        </div>

        <!-- Gallery Grid (shows when items exist) -->
        <div class="gallery-grid" *ngIf="galleryItems.length > 0">
          <div
            class="gallery-item gallery-animate"
            *ngFor="let item of displayedItems; let i = index"
            [class.large]="i === 0 || i === 5"
            [style.animation-delay]="i * 0.08 + 's'"
            (click)="openLightbox(item)"
          >
            <img [src]="item.imageUrl" [alt]="item.title" class="gallery-image" />

            <div class="item-overlay">
              <h4>{{ item.title }}</h4>
              <span class="item-category">{{ item.category }}</span>
            </div>
          </div>
        </div>

        <!-- Empty State Placeholder -->
        <div class="empty-gallery" *ngIf="galleryItems.length === 0">
          <div class="empty-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <h3>Gallery Coming Soon</h3>
          <p>Photos and moments will be added here soon.</p>
          <p class="stay-tuned">Stay tuned for updates!</p>
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
            <div class="lightbox-image-wrapper">
              <img [src]="selectedItem.imageUrl" [alt]="selectedItem.title" class="lightbox-img" />
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
        margin: -40px auto 20px;
      }

      .update-notice {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 14px 28px;
        background: rgba(0, 212, 255, 0.08);
        border: 1px dashed rgba(0, 212, 255, 0.3);
        border-radius: 30px;
        margin: 0 auto 40px;
        width: fit-content;
        color: var(--color-cyan);
        font-size: 0.95rem;
      }

      .update-notice svg {
        flex-shrink: 0;
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

      .gallery-animate {
        animation: galleryFadeIn 0.5s ease-out forwards;
        opacity: 0;
      }

      @keyframes galleryFadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .gallery-item:hover {
        transform: scale(1.03);
        z-index: 10;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }

      .gallery-item.large {
        grid-column: span 2;
        grid-row: span 2;
      }

      .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      .gallery-item:hover .gallery-image {
        transform: scale(1.1);
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

      /* Empty Gallery State */
      .empty-gallery {
        text-align: center;
        padding: 80px 40px;
        background: rgba(17, 34, 64, 0.4);
        border: 2px dashed rgba(0, 212, 255, 0.2);
        border-radius: 24px;
      }

      .empty-icon {
        width: 120px;
        height: 120px;
        margin: 0 auto 30px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(124, 58, 237, 0.1));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .empty-gallery h3 {
        font-size: 1.8rem;
        color: var(--color-text);
        margin-bottom: 15px;
      }

      .empty-gallery p {
        color: var(--color-text-muted);
        font-size: 1.1rem;
        margin-bottom: 10px;
      }

      .empty-gallery .stay-tuned {
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
        font-size: 0.95rem;
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
        background: rgba(0, 212, 255, 0.1);
        border: none;
        color: var(--color-text);
        cursor: pointer;
        padding: 10px;
        border-radius: 12px;
        transition: all 0.3s ease;
      }

      .lightbox-close:hover {
        color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.2);
      }

      .lightbox-content {
        text-align: center;
        max-width: 90vw;
        max-height: 90vh;
      }

      .lightbox-image-wrapper {
        max-width: 800px;
        max-height: 60vh;
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 25px;
        border: 1px solid rgba(0, 212, 255, 0.2);
      }

      .lightbox-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
          grid-auto-rows: 200px;
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
  showAll = false;
  itemsToShow = 6;

  // { title: 'Photo Title', category: 'Category', imageUrl: 'image.png' }
  galleryItems: GalleryItem[] = [];

  get displayedItems(): GalleryItem[] {
    return this.showAll ? this.galleryItems : this.galleryItems.slice(0, this.itemsToShow);
  }

  get hasMoreItems(): boolean {
    return this.galleryItems.length > this.itemsToShow;
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  openLightbox(item: GalleryItem) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }
}
