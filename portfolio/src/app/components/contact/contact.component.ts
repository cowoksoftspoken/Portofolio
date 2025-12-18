import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Get In Touch</span>
        </h2>

        <p class="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision.
        </p>

        <div class="contact-grid">
          <!-- Contact Card -->
          <div class="contact-card glass-card fade-in">
            <div class="contact-header">
              <div class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
              </div>
              <div>
                <h3>Let's Connect</h3>
                <p>Always happy to chat about tech!</p>
              </div>
            </div>

            <div class="contact-info">
              <div class="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Indonesia</span>
              </div>
              <div class="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>SMK Krian 1 - RPL</span>
              </div>
            </div>

            <a href="mailto:contact@example.com" class="btn-primary contact-btn">
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
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send a Message
            </a>
          </div>

          <!-- Social Links -->
          <div class="social-card glass-card fade-in">
            <h3 class="social-title">Connect With Me</h3>
            <p class="social-subtitle">Find me on these platforms</p>

            <div class="social-grid">
              <a
                *ngFor="let social of socialLinks"
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                [style.--hover-color]="social.color"
              >
                <span class="social-icon" [innerHTML]="social.icon"></span>
                <span class="social-name">{{ social.name }}</span>
                <svg
                  class="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section fade-in">
          <div class="cta-content glass-card">
            <span class="cta-emoji">🚀</span>
            <h3>Ready to build something amazing?</h3>
            <p>Let's collaborate and turn your ideas into reality.</p>
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

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin-bottom: 60px;
      }

      .contact-card,
      .social-card {
        padding: 40px;
      }

      .contact-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
      }

      .contact-icon {
        width: 65px;
        height: 65px;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      .contact-header h3 {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 5px;
      }

      .contact-header p {
        color: var(--color-text-muted);
        font-size: 0.95rem;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 30px;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--color-text-muted);
      }

      .info-item svg {
        color: var(--color-cyan);
      }

      .contact-btn {
        width: 100%;
        justify-content: center;
      }

      .social-title {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .social-subtitle {
        color: var(--color-text-muted);
        margin-bottom: 30px;
      }

      .social-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 18px 20px;
        background: rgba(17, 34, 64, 0.5);
        border: 1px solid rgba(0, 212, 255, 0.1);
        border-radius: 12px;
        text-decoration: none;
        color: var(--color-text);
        transition: all 0.3s ease;
      }

      .social-link:hover {
        border-color: var(--hover-color, var(--color-cyan));
        background: rgba(0, 212, 255, 0.05);
        transform: translateX(10px);
      }

      .social-link:hover .social-icon {
        color: var(--hover-color, var(--color-cyan));
      }

      .social-link:hover .arrow-icon {
        opacity: 1;
        transform: translateX(0);
      }

      .social-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-muted);
        transition: color 0.3s ease;
      }

      .social-name {
        flex: 1;
        font-weight: 500;
      }

      .arrow-icon {
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s ease;
        color: var(--color-cyan);
      }

      .cta-section {
        text-align: center;
      }

      .cta-content {
        display: inline-block;
        padding: 40px 60px;
      }

      .cta-emoji {
        font-size: 3rem;
        display: block;
        margin-bottom: 20px;
      }

      .cta-content h3 {
        font-size: 1.5rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .cta-content p {
        color: var(--color-text-muted);
      }

      @media (max-width: 900px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .cta-content {
          padding: 30px;
          width: 100%;
        }
      }
    `,
  ],
})
export class ContactComponent {
  socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/i.setya_b',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
      color: '#E4405F',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/cowoksoftspoken',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      color: '#ffffff',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      color: '#0A66C2',
    },
    {
      name: 'Discord',
      url: 'https://discord.com',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"/></svg>`,
      color: '#5865F2',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      color: '#1877F2',
    },
  ];
}
