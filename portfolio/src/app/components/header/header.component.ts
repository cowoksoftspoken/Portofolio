import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'setya-header',
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
              <a
                [href]="'#' + link.id"
                class="nav-link"
                [class.active]="activeSection === link.id"
                (click)="scrollTo($event, link.id)"
              >
                {{ link.label }}
              </a>
            </li>
            <!-- CV Download Button in Mobile Menu -->
            <li class="mobile-cv-btn">
              <a href="cv.pdf" download class="cv-download-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </a>
            </li>
          </ul>

          <!-- Desktop CV Download Button -->
          <a href="cv.pdf" download class="cv-download-btn desktop-cv-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>CV</span>
          </a>

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
        background: rgba(13, 13, 13, 0.95);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
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
        text-decoration: none;\r\n        transition: all 0.3s ease;
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

      .logo-slash {\r\n        color: var(--color-purple);\r\n      }\r\n\r\n      .logo:hover {\r\n        transform: translateY(-2px);\r\n        filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));\r\n      }

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

      .nav-link.active {
        color: var(--color-cyan);
      }

      .nav-link.active::after {
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

      /* CV Download Button */
      .cv-download-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 10px;
        color: var(--color-cyan);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .cv-download-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
      }

      .cv-download-btn:hover {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(124, 58, 237, 0.25));
        border-color: var(--color-cyan);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.25);
      }

      .cv-download-btn:hover::before {
        left: 100%;
      }

      .cv-download-btn svg {
        transition: transform 0.3s ease;
      }

      .cv-download-btn:hover svg {
        transform: translateY(2px);
        animation: downloadBounce 0.6s ease infinite;
      }

      @keyframes downloadBounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(3px);
        }
      }

      .desktop-cv-btn {
        margin-left: 20px;
      }

      .mobile-cv-btn {
        display: none;
      }

      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: flex;
        }

        .desktop-cv-btn {
          display: none;
        }

        .mobile-cv-btn {
          display: block;
          margin-top: 20px;
        }

        .mobile-cv-btn .cv-download-btn {
          width: 100%;
          justify-content: center;
          padding: 14px 24px;
          font-size: 1rem;
        }

        .nav-links {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          max-width: 300px;
          height: 100vh;
          background: rgba(26, 26, 26, 0.98);
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
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isScrolled = false;
  mobileMenuOpen = false;
  activeSection = '';
  private scrollListener: (() => void) | null = null;

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'experiments', label: 'Experiments' },
    { id: 'contact', label: 'Contact' },
  ];

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 150;

    // Check sections in reverse order (bottom to top)
    const sectionIds = [
      'contact',
      'experiments',
      'gallery',
      'certificates',
      'projects',
      'skills',
      'about',
    ];

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = id;
          return;
        }
      }
    }

    // If at top of page
    if (window.scrollY < 100) {
      this.activeSection = '';
    }
  }

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
    this.activeSection = id;
  }
}
