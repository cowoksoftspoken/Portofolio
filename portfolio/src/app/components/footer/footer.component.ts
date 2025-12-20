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
            <p class="brand-tagline">
              Building the future through modern web technologies, intelligent systems, and
              continuous improvement — one line of code at a time. Driven to create clean, scalable,
              and meaningful digital experiences.
            </p>
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

          <!-- Spotify Playlist -->
          <div class="footer-spotify">
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#1DB954"
              >
                <path
                  d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                />
              </svg>
              My Playlist
            </h4>

            <div class="spotify-embed">
              <iframe
                data-testid="embed-iframe"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/5TI5gJblYSn53ZeOlkwdBs?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Footer Bottom - Code Style -->
        <div class="footer-bottom">
          <div class="footer-code-block">
            <pre class="footer-code"><code><span class="code-comment">// Developer Info</span>
<span class="code-keyword">const</span> <span class="code-variable">developer</span> = &#123;
  <span class="code-property">name</span>: <span class="code-string">"Inggrit Setya Budi"</span>,
  <span class="code-property">role</span>: <span class="code-string">"Software Engineer"</span>,
  <span class="code-property">school</span>: <span class="code-string">"SMK Krian 1 Sidoarjo"</span>,
  <span class="code-property">year</span>: <span class="code-number">{{ currentYear }}</span>,
  <span class="code-property">madeWith</span>: <span class="code-heart">&hearts;</span>
&#125;;</code></pre>
          </div>
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
        grid-template-columns: 2fr 1fr 1fr 1.5fr;
        gap: 40px;
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

      .footer-spotify h4 {
        color: var(--color-text);
        font-size: 1.1rem;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .spotify-embed {
        border-radius: 12px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.3);
        margin-bottom: 10px;
      }

      .spotify-embed iframe {
        display: block;
      }

      .spotify-note {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        opacity: 0.7;
        font-style: italic;
      }

      .footer-bottom {
        padding-top: 30px;
      }

      .footer-code-block {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-radius: 12px;
        padding: 20px 24px;
        overflow-x: auto;
      }

      .footer-code {
        margin: 0;
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        line-height: 1.6;
        text-align: left;
      }

      .footer-code code {
        color: var(--color-text-muted);
      }

      .code-comment {
        color: #6a737d;
        font-style: italic;
      }

      .code-keyword {
        color: #ff79c6;
      }

      .code-variable {
        color: var(--color-cyan);
      }

      .code-property {
        color: #79c0ff;
      }

      .code-string {
        color: #a5d6ff;
      }

      .code-number {
        color: #ffa657;
      }

      .code-heart {
        color: #a855f7;
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

      @media (max-width: 1100px) {
        .footer-top {
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .footer-brand {
          grid-column: span 2;
          text-align: center;
          max-width: none;
        }

        .footer-spotify {
          grid-column: span 2;
        }
      }

      @media (max-width: 640px) {
        .footer {
          padding: 60px 0 25px;
        }

        .footer-top {
          grid-template-columns: 1fr;
          gap: 30px;
          text-align: left;
        }

        .footer-brand,
        .footer-spotify {
          grid-column: span 1;
          text-align: left;
        }

        .footer-brand {
          max-width: none;
        }

        .brand-tagline {
          font-size: 0.9rem;
        }

        .footer-links h4,
        .footer-tech h4 {
          font-size: 1rem;
          margin-bottom: 15px;
        }

        .footer-links ul {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
        }

        .footer-links li {
          margin-bottom: 0;
        }

        .tech-badges {
          justify-content: flex-start;
        }

        .footer-spotify h4 {
          justify-content: flex-start;
        }

        .footer-bottom {
          padding-top: 25px;
        }

        .footer-code-block {
          padding: 16px 18px;
        }

        .footer-code {
          font-size: 0.75rem;
        }
      }

      @media (max-width: 480px) {
        .container {
          padding: 0 16px;
        }

        .footer-code-block {
          padding: 14px 16px;
          border-radius: 10px;
        }

        .footer-code {
          font-size: 0.7rem;
          line-height: 1.5;
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
