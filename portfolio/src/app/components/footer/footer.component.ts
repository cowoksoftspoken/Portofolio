import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <!-- Footer Top -->
        <div class="footer-top">
          <!-- Logo -->
          <div class="footer-brand">
            <a href="#" class="logo" (click)="scrollToTop($event)">
              <span class="logo-bracket">&lt;</span>
              <span class="logo-text">Setya</span>
              <span class="logo-slash">/</span>
              <span class="logo-bracket">&gt;</span>
            </a>
            <p class="brand-tagline">Building the future, one line at a time.</p>
          </div>

          <!-- Quick Links -->
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li *ngFor="let link of quickLinks">
                <a [href]="'#' + link.id" (click)="scrollTo($event, link.id)">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="footer-tech">
            <h4>Built With</h4>
            <div class="tech-badges">
              <span class="tech-badge">Angular</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p class="copyright">
            <span class="code-style">const year = {{ currentYear }};</span>
            <span class="divider">|</span>
            Made with 💜 by Setya B
          </p>
          <p class="credits">Software Engineering Student @ SMK Krian 1</p>
        </div>
      </div>

      <!-- Decorative Line -->
      <div class="footer-glow"></div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: linear-gradient(180deg, transparent, rgba(10, 25, 47, 0.5));
        padding: 80px 0 30px;
        position: relative;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .footer-top {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 60px;
        padding-bottom: 50px;
        border-bottom: 1px solid rgba(0, 212, 255, 0.1);
      }

      .footer-brand {
        max-width: 300px;
      }

      .logo {
        font-family: 'Fira Code', monospace;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 15px;
      }

      .logo-bracket {
        color: var(--color-cyan);
      }

      .logo-text {
        color: var(--color-text);
      }

      .logo-slash {
        color: var(--color-purple);
      }

      .brand-tagline {
        color: var(--color-text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
      }

      .footer-links h4,
      .footer-tech h4 {
        color: var(--color-text);
        font-size: 1.1rem;
        margin-bottom: 20px;
      }

      .footer-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-links li {
        margin-bottom: 12px;
      }

      .footer-links a {
        color: var(--color-text-muted);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.95rem;
      }

      .footer-links a:hover {
        color: var(--color-cyan);
        padding-left: 5px;
      }

      .tech-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .tech-badge {
        padding: 6px 14px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 20px;
        font-size: 0.8rem;
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      .footer-bottom {
        padding-top: 30px;
        text-align: center;
      }

      .copyright {
        color: var(--color-text-muted);
        font-size: 0.95rem;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
      }

      .code-style {
        font-family: 'Fira Code', monospace;
        color: var(--color-cyan);
      }

      .divider {
        color: rgba(0, 212, 255, 0.3);
      }

      .credits {
        color: var(--color-text-muted);
        font-size: 0.85rem;
        opacity: 0.7;
      }

      .footer-glow {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--color-cyan),
          var(--color-purple),
          transparent
        );
      }

      @media (max-width: 900px) {
        .footer-top {
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .footer-brand {
          grid-column: span 2;
          text-align: center;
          max-width: none;
        }
      }

      @media (max-width: 640px) {
        .footer-top {
          grid-template-columns: 1fr;
          text-align: center;
        }

        .footer-brand {
          grid-column: span 1;
        }

        .tech-badges {
          justify-content: center;
        }

        .copyright {
          flex-direction: column;
          gap: 8px;
        }

        .divider {
          display: none;
        }
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
