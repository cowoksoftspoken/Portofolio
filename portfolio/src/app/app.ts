import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperimentsComponent } from './components/experiments/experiments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificatesComponent,
    GalleryComponent,
    ExperimentsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <!-- Animated Background -->
    <div class="animated-bg"></div>

    <!-- Floating Particles -->
    <div class="particles">
      <div class="particle" *ngFor="let p of particles"></div>
    </div>

    <!-- Header -->
    <setya-header [isScrolled]="isScrolled"></setya-header>

    <!-- Main Content -->
    <main>
      <setya-hero></setya-hero>
      <setya-about></setya-about>
      <setya-skills></setya-skills>
      <setya-projects></setya-projects>
      <setya-certificates></setya-certificates>
      <setya-gallery></setya-gallery>
      <setya-experiments></setya-experiments>
      <setya-contact></setya-contact>
    </main>

    <!-- Footer -->
    <setya-footer></setya-footer>

    <!-- Back to Top Button -->
    <button
      class="back-to-top"
      [class.visible]="isScrolled"
      (click)="scrollToTop()"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  `,
  styles: [
    `
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
      }

      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 212, 255, 0.5);
      }

      @media (max-width: 768px) {
        .back-to-top {
          bottom: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
        }
      }
    `,
  ],
})
export class App implements OnInit {
  isScrolled = false;
  particles = Array(10).fill(0);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  ngOnInit() {
    this.initScrollAnimations();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
