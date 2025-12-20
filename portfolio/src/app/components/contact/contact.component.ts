import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  bgGradient: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
          <!-- Contact Form -->
          <div class="contact-form-card glass-card fade-in">
            <div class="form-header">
              <div class="form-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              </div>
              <div>
                <h3>Send a Message</h3>
                <p>Fill out the form and I'll get back to you!</p>
              </div>
            </div>

            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    [(ngModel)]="formData.email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-primary submit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
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
                <div class="social-logo" [style.background]="social.bgGradient">
                  <img class="social-icon" [src]="social.icon" [alt]="social.name" />
                </div>
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
            <div class="cta-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
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
        grid-template-columns: 1.2fr 1fr;
        gap: 30px;
        margin-bottom: 60px;
      }

      .contact-form-card,
      .social-card {
        padding: 40px;
      }

      .form-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
      }

      .form-icon {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      .form-header h3 {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 5px;
      }

      .form-header p {
        color: var(--color-text-muted);
        font-size: 0.95rem;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .form-group label {
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 500;
      }

      .form-group input,
      .form-group textarea {
        padding: 14px 18px;
        background: rgba(17, 34, 64, 0.6);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-radius: 12px;
        color: var(--color-text);
        font-size: 0.95rem;
        font-family: inherit;
        transition: all 0.3s ease;
        resize: none;
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: var(--color-text-muted);
        opacity: 0.6;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.05);
        box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
      }

      .submit-btn {
        margin-top: 10px;
        justify-content: center;
        gap: 10px;
      }

      .social-title {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .social-subtitle {
        color: var(--color-text-muted);
        margin-bottom: 25px;
      }

      .social-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 30px;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 14px 18px;
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
        transform: translateX(8px);
      }

      .social-link:hover .social-logo {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }

      .social-link:hover .arrow-icon {
        opacity: 1;
        transform: translateX(0);
      }

      .social-logo {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .social-icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      .social-icon svg {
        width: 100%;
        height: 100%;
      }

      .social-name {
        flex: 1;
        font-weight: 500;
        font-size: 0.95rem;
      }

      .arrow-icon {
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s ease;
        color: var(--color-cyan);
      }

      .contact-info-section {
        padding-top: 25px;
        border-top: 1px solid rgba(0, 212, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--color-text-muted);
        font-size: 0.95rem;
      }

      .info-item svg {
        color: var(--color-cyan);
      }

      .cta-section {
        text-align: center;
      }

      .cta-content {
        display: inline-block;
        padding: 40px 60px;
      }

      .cta-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 20px;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
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

        .form-row {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .cta-content {
          padding: 30px;
          width: 100%;
        }

        .form-header {
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-form-card,
        .social-card {
          padding: 25px;
        }
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Simple Icons CDN URLs from https://simpleicons.org
  socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/i.setya_b',
      icon: 'https://cdn.simpleicons.org/instagram/ffffff',
      color: '#E4405F',
      bgGradient: 'linear-gradient(135deg, #833AB4, #E4405F, #FCAF45)',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/cowoksoftspoken',
      icon: 'https://cdn.simpleicons.org/github/ffffff',
      color: '#181717',
      bgGradient: 'linear-gradient(135deg, #24292e, #404448)',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/inggrit-setya-budi-64387333b/',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg',
      color: '#0A66C2',
      bgGradient: 'linear-gradient(135deg, #0077B5, #0A66C2)',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/',
      icon: 'https://cdn.simpleicons.org/whatsapp/ffffff',
      color: '#25D366',
      bgGradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    },
    {
      name: 'Discord',
      url: 'https://discord.com',
      icon: 'https://cdn.simpleicons.org/discord/ffffff',
      color: '#5865F2',
      bgGradient: 'linear-gradient(135deg, #5865F2, #7289DA)',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/16Y8vXuZFg/',
      icon: 'https://cdn.simpleicons.org/facebook/ffffff',
      color: '#0866FF',
      bgGradient: 'linear-gradient(135deg, #0866FF, #1877F2)',
    },
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
