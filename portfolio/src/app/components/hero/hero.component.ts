import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-content">
          <!-- Code Comment Style Intro -->
          <p class="hero-greeting">
            <span class="comment">// Hello, World! I'm</span>
          </p>

          <!-- Main Name -->
          <h1 class="hero-name">
            <span class="gradient-text">Inggrit Setya Budi</span>
          </h1>

          <!-- Animated Role -->
          <h2 class="hero-role">
            <span class="role-prefix">&gt; </span>
            <span class="role-text" #typingText></span>
            <span class="cursor">|</span>
          </h2>

          <!-- Description -->
          <p class="hero-description">
            A passionate <span class="highlight">Software Engineering</span> student who loves
            exploring everything from low-level development to web apps, Android, and AI/ML.
          </p>

          <!-- CTA Buttons -->
          <div class="hero-buttons">
            <a href="#projects" class="btn-primary" (click)="scrollTo($event, 'projects')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Projects
            </a>
            <a href="#contact" class="btn-outline" (click)="scrollTo($event, 'contact')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                />
              </svg>
              Contact Me
            </a>
          </div>

          <!-- Tech Stack Preview -->
          <div class="hero-tech">
            <span class="tech-label">Current Stack:</span>
            <div class="tech-icons">
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">Next.js</span>
              <span class="tech-badge">Python</span>
              <span class="tech-badge">Node.js</span>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="hero-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="code-block">
          <pre><code>const developer: DeveloperLife = &#123;
  name: "Inggrit Setya Budi",
  role: "Software Engineer",
  passion: ["Web", "AI", "Mobile"],
  coffee: true,
  github: "https://github.com/cowoksoftspoken",
&#125;;</code></pre>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        padding: 120px 0 60px;
        overflow: hidden;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        width: 100%;
      }

      .hero-content {
        max-width: 700px;
        position: relative;
        z-index: 10;
      }

      .hero-greeting {
        margin-bottom: 20px;
      }

      .comment {
        font-family: 'Fira Code', monospace;
        color: var(--color-cyan);
        font-size: 1.1rem;
      }

      .hero-name {
        font-size: clamp(3rem, 8vw, 5rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 15px;
      }

      .hero-role {
        font-family: 'Fira Code', monospace;
        font-size: clamp(1.2rem, 3vw, 1.8rem);
        color: var(--color-text-muted);
        margin-bottom: 30px;
        display: flex;
        align-items: center;
      }

      .role-prefix {
        color: var(--color-purple);
      }

      .role-text {
        color: var(--color-text);
      }

      .cursor {
        color: var(--color-cyan);
        animation: blink 1s infinite;
        margin-left: 2px;
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      .hero-description {
        font-size: 1.15rem;
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: 40px;
        max-width: 550px;
      }

      .highlight {
        color: var(--color-cyan);
        font-weight: 600;
      }

      .hero-buttons {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 50px;
      }

      .hero-tech {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
      }

      .tech-label {
        color: var(--color-text-muted);
        font-size: 0.9rem;
      }

      .tech-icons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .tech-badge {
        padding: 6px 14px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 20px;
        font-size: 0.85rem;
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      .scroll-indicator {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: var(--color-text-muted);
        font-size: 0.85rem;
        animation: bounce 2s infinite;
      }

      .mouse {
        width: 26px;
        height: 40px;
        border: 2px solid var(--color-text-muted);
        border-radius: 15px;
        position: relative;
      }

      .wheel {
        width: 4px;
        height: 8px;
        background: var(--color-cyan);
        border-radius: 2px;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        animation: scroll 2s infinite;
      }

      @keyframes scroll {
        0%,
        100% {
          opacity: 1;
          top: 8px;
        }
        50% {
          opacity: 0.5;
          top: 18px;
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        50% {
          transform: translateX(-50%) translateY(10px);
        }
      }

      .hero-decoration {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        pointer-events: none;
      }

      .circle {
        position: absolute;
        border-radius: 50%;
        opacity: 0.1;
      }

      .circle-1 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        top: 10%;
        right: 10%;
        animation: float 8s ease-in-out infinite;
      }

      .circle-2 {
        width: 250px;
        height: 250px;
        background: linear-gradient(135deg, var(--color-purple), var(--color-blue));
        bottom: 20%;
        right: 30%;
        animation: float 10s ease-in-out infinite reverse;
      }

      @keyframes float {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(20px, -20px) scale(1.05);
        }
        66% {
          transform: translate(-10px, 10px) scale(0.95);
        }
      }

      .code-block {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        background: rgba(17, 34, 64, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 12px;
        padding: 25px;
        font-family: 'Fira Code', monospace;
        font-size: 0.9rem;
        color: var(--color-text-muted);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        pointer-events: auto;
      }

      .code-block pre {
        margin: 0;
      }

      .code-block code {
        color: var(--color-text);
      }

      @media (max-width: 1024px) {
        .hero-decoration {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .hero {
          padding: 100px 0 40px;
          min-height: auto;
        }

        .hero-buttons {
          flex-direction: column;
        }

        .hero-buttons a {
          width: 100%;
          justify-content: center;
        }

        .scroll-indicator {
          display: none;
        }
      }
    `,
  ],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typingText') typingText!: ElementRef;

  roles = [
    'Software Engineer',
    'Web Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Tech Explorer',
  ];

  currentRoleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 100;

  ngAfterViewInit() {
    setTimeout(() => this.typeRole(), 500);
  }

  typeRole() {
    const currentRole = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
    } else {
      this.currentCharIndex++;
    }

    if (this.typingText?.nativeElement) {
      this.typingText.nativeElement.textContent = currentRole.substring(0, this.currentCharIndex);
    }

    let speed = this.typingSpeed;

    if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      speed = 500;
    } else if (this.isDeleting) {
      speed = 50;
    }

    setTimeout(() => this.typeRole(), speed);
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
