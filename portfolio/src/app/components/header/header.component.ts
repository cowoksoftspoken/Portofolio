import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <nav class="nav">
          <!-- Logo -->
          <a href="#" class="logo" (click)="scrollTo($event, 'hero')">
            <span class="logo-bracket">&lt;</span>
            <span class="logo-text">Setya</span>
            <span class="logo-slash">/</span>
            <span class="logo-bracket">&gt;</span>
          </a>

          <!-- Desktop Navigation -->
          <ul class="nav-links" [class.active]="mobileMenuOpen">
            <li *ngFor="let link of navLinks">
              <a [href]="'#' + link.id" class="nav-link" (click)="scrollTo($event, link.id)">
                {{ link.label }}
              </a>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button
            class="mobile-menu-btn"
            [class.active]="mobileMenuOpen"
            (click)="toggleMobileMenu()"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 20px 0;
        transition: all 0.3s ease;
      }

      .header.scrolled {
        background: rgba(10, 25, 47, 0.9);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 15px 0;
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-family: 'Fira Code', monospace;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 2px;
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

      .nav-links {
        display: flex;
        list-style: none;
        gap: 40px;
      }

      .nav-link {
        color: var(--color-text-muted);
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--color-cyan), var(--color-purple));
        transition: width 0.3s ease;
      }

      .nav-link:hover {
        color: var(--color-cyan);
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .mobile-menu-btn {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        z-index: 1001;
      }

      .mobile-menu-btn span {
        display: block;
        width: 25px;
        height: 2px;
        background: var(--color-text);
        transition: all 0.3s ease;
      }

      .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
      }

      .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: flex;
        }

        .nav-links {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          max-width: 300px;
          height: 100vh;
          background: rgba(17, 34, 64, 0.98);
          backdrop-filter: blur(20px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
          transition: right 0.3s ease;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        }

        .nav-links.active {
          right: 0;
        }

        .nav-link {
          font-size: 1.2rem;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() isScrolled = false;
  mobileMenuOpen = false;

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    this.mobileMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
