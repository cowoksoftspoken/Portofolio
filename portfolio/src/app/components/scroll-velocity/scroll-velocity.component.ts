import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'setya-scroll-velocity',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scroll-velocity-container" #container>
      <div class="scroll-velocity-track" #track>
        <div class="scroll-velocity-content">
          <span class="scroll-item" *ngFor="let item of displayItems; let i = index">
            <span class="item-text">{{ item }}</span>
            <span class="item-separator">✦</span>
          </span>
        </div>
        <div class="scroll-velocity-content" aria-hidden="true">
          <span class="scroll-item" *ngFor="let item of displayItems; let i = index">
            <span class="item-text">{{ item }}</span>
            <span class="item-separator">✦</span>
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .scroll-velocity-container {
        width: 100%;
        overflow: hidden;
        background: linear-gradient(
          90deg,
          rgba(0, 212, 255, 0.05) 0%,
          rgba(139, 92, 246, 0.05) 50%,
          rgba(0, 212, 255, 0.05) 100%
        );
        border-top: 1px solid rgba(0, 212, 255, 0.15);
        border-bottom: 1px solid rgba(0, 212, 255, 0.15);
        padding: 20px 0;
        position: relative;
      }

      .scroll-velocity-container::before,
      .scroll-velocity-container::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        z-index: 2;
        pointer-events: none;
      }

      .scroll-velocity-container::before {
        left: 0;
        background: linear-gradient(to right, var(--color-bg, #0a0a0a), transparent);
      }

      .scroll-velocity-container::after {
        right: 0;
        background: linear-gradient(to left, var(--color-bg, #0a0a0a), transparent);
      }

      .scroll-velocity-track {
        display: flex;
        width: fit-content;
        animation: scroll-velocity 30s linear infinite;
      }

      .scroll-velocity-track:hover {
        animation-play-state: paused;
      }

      .scroll-velocity-content {
        display: flex;
        align-items: center;
        gap: 0;
      }

      .scroll-item {
        display: flex;
        align-items: center;
        white-space: nowrap;
      }

      .item-text {
        font-family: 'Fira Code', monospace;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-text-muted, #888);
        text-transform: uppercase;
        letter-spacing: 0.15em;
        padding: 0 20px;
        transition: color 0.3s ease;
      }

      .scroll-item:hover .item-text {
        color: var(--color-cyan, #00d4ff);
      }

      .item-separator {
        color: var(--color-cyan, #00d4ff);
        font-size: 0.8rem;
        opacity: 0.6;
      }

      @keyframes scroll-velocity {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @media (max-width: 768px) {
        .scroll-velocity-container {
          padding: 15px 0;
        }

        .item-text {
          font-size: 0.9rem;
          padding: 0 15px;
        }

        .scroll-velocity-container::before,
        .scroll-velocity-container::after {
          width: 50px;
        }
      }
    `,
  ],
})
export class ScrollVelocityComponent implements OnInit {
  @Input() items: string[] = [
    'Web Development',
    'Mobile Apps',
    'AI & Machine Learning',
    'TypeScript',
    'Angular',
    'React',
    'Node.js',
    'Python',
    'Problem Solving',
    'Clean Code',
  ];

  @Input() speed: number = 30;

  displayItems: string[] = [];

  ngOnInit(): void {
    // Duplicate items for seamless loop
    this.displayItems = [...this.items, ...this.items];
  }
}
