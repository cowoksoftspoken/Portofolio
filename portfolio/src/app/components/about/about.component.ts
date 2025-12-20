import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">About Me</span>
        </h2>

        <div class="about-grid">
          <!-- Profile Card -->
          <div class="about-card glass-card fade-in">
            <!-- Decorative corner accents -->
            <div class="card-accent top-left"></div>
            <div class="card-accent top-right"></div>
            <div class="card-accent bottom-left"></div>
            <div class="card-accent bottom-right"></div>

            <div class="profile-image">
              <div class="image-ring">
                <div class="image-container">
                  <img
                    src="profile-avatar.jpg"
                    alt="Inggrit Setya Budi - Software Engineer"
                    class="profile-img"
                  />
                </div>
              </div>
              <div class="status-badge">
                <span class="status-dot"></span>
                <span>Available for hire</span>
              </div>
            </div>

            <div class="profile-info">
              <h3 class="profile-name">Inggrit Setya Budi</h3>
              <p class="profile-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Software Engineer
              </p>
              <p class="profile-location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Sidoarjo, Indonesia
              </p>
            </div>

            <div class="profile-divider"></div>

            <div class="profile-social">
              <a
                href="https://github.com/cowoksoftspoken"
                target="_blank"
                class="social-link"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/inggrit-setya-budi-64387333b/"
                target="_blank"
                class="social-link"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/i.setya_b"
                target="_blank"
                class="social-link"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Bio Content -->
          <div class="about-content fade-in">
            <div class="bio-section">
              <h3 class="bio-title">
                <span class="code-tag">&lt;bio&gt;</span>
              </h3>
              <p class="bio-text">
                I'm a passionate <span class="highlight">Software Engineering (RPL)</span> student
                who thrives on exploring the entire spectrum of software development. From
                <span class="highlight">low-level programming</span> to building modern
                <span class="highlight">web applications</span>, Android apps, and diving into
                cutting-edge <span class="highlight">AI/ML</span> technologies.
              </p>
              <p class="bio-text">
                I love tackling deep technical challenges and building real-world, production-ready
                projects that solve actual problems.
              </p>
              <h3 class="bio-title">
                <span class="code-tag">&lt;/bio&gt;</span>
              </h3>
            </div>

            <!-- Current Focus -->
            <div class="focus-section glass-card">
              <div class="focus-icon">
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
                    d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"
                  />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <div class="focus-content">
                <h4>Current Focus</h4>
                <p>
                  Learning <span class="highlight">Machine Learning</span> and
                  <span class="highlight">Artificial Intelligence</span>, with a strong interest in
                  integrating AI into real-world systems.
                </p>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="stats-grid">
              <div class="stat-item" *ngFor="let stat of stats">
                <span class="stat-value gradient-text">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-grid {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 60px;
        align-items: start;
      }

      .about-card {\n        padding: 40px 30px;\n        text-align: center;\n        position: sticky;\n        top: 100px;\n        overflow: hidden;\n      }\n\n      /* Decorative corner accents */\n      .card-accent {\n        position: absolute;\n        width: 60px;\n        height: 60px;\n        pointer-events: none;\n      }\n\n      .card-accent::before,\n      .card-accent::after {\n        content: '';\n        position: absolute;\n        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));\n        opacity: 0.4;\n      }\n\n      .card-accent.top-left { top: 0; left: 0; }\n      .card-accent.top-left::before { width: 2px; height: 40px; top: 0; left: 0; }\n      .card-accent.top-left::after { width: 40px; height: 2px; top: 0; left: 0; }\n\n      .card-accent.top-right { top: 0; right: 0; }\n      .card-accent.top-right::before { width: 2px; height: 40px; top: 0; right: 0; }\n      .card-accent.top-right::after { width: 40px; height: 2px; top: 0; right: 0; }\n\n      .card-accent.bottom-left { bottom: 0; left: 0; }\n      .card-accent.bottom-left::before { width: 2px; height: 40px; bottom: 0; left: 0; }\n      .card-accent.bottom-left::after { width: 40px; height: 2px; bottom: 0; left: 0; }\n\n      .card-accent.bottom-right { bottom: 0; right: 0; }\n      .card-accent.bottom-right::before { width: 2px; height: 40px; bottom: 0; right: 0; }\n      .card-accent.bottom-right::after { width: 40px; height: 2px; bottom: 0; right: 0; }\n\n      .profile-image {\n        margin-bottom: 25px;\n      }\n
      .image-ring {\n        width: 160px;\n        height: 160px;\n        margin: 0 auto 20px;\n        border-radius: 50%;\n        padding: 4px;\n        background: conic-gradient(from 0deg, var(--color-cyan), var(--color-purple), var(--color-cyan));\n        position: relative;\n        animation: rotateRing 8s linear infinite;\n      }\n\n      @keyframes rotateRing {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      .image-ring::before {\n        content: '';\n        position: absolute;\n        inset: -8px;\n        border-radius: 50%;\n        background: conic-gradient(from 0deg, var(--color-cyan), var(--color-purple), var(--color-cyan));\n        z-index: -1;\n        opacity: 0.3;\n        filter: blur(15px);\n        animation: rotateRing 8s linear infinite;\n      }\n\n      .image-container {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: #0d0d0d;\n        padding: 4px;\n        animation: rotateRingReverse 8s linear infinite;\n      }\n\n      @keyframes rotateRingReverse {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(-360deg); }\n      }\n
      .profile-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }

      .status-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 20px;\n        background: rgba(0, 255, 136, 0.08);\n        border: 1px solid rgba(0, 255, 136, 0.25);\n        border-radius: 25px;\n        font-size: 0.85rem;\n        color: #00ff88;\n        font-weight: 500;\n      }\n\n      .status-dot {\n        width: 8px;\n        height: 8px;\n        background: #00ff88;\n        border-radius: 50%;\n        animation: pulse 2s infinite;\n        box-shadow: 0 0 10px rgba(0, 255, 136, 0.6);\n      }\n\n      @keyframes pulse {\n        0%, 100% {\n          opacity: 1;\n          transform: scale(1);\n        }\n        50% {\n          opacity: 0.5;\n          transform: scale(1.3);\n        }\n      }\n\n      .profile-info {\n        margin-bottom: 20px;\n      }\n\n      .profile-name {\n        font-size: 1.6rem;\n        font-weight: 700;\n        color: var(--color-text);\n        margin-bottom: 12px;\n        letter-spacing: -0.02em;\n      }\n\n      .profile-title {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        color: var(--color-cyan);\n        font-weight: 600;\n        font-size: 1rem;\n        margin-bottom: 8px;\n      }\n\n      .profile-title svg {\n        opacity: 0.8;\n      }\n\n      .profile-location {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        color: var(--color-text-muted);\n        font-size: 0.9rem;\n      }\n\n      .profile-divider {\n        width: 60%;\n        height: 1px;\n        margin: 20px auto;\n        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n      }\n\n      .profile-social {\n        display: flex;\n        justify-content: center;\n        gap: 16px;\n      }\n\n      .social-link {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 44px;\n        height: 44px;\n        border-radius: 12px;\n        background: rgba(255, 255, 255, 0.03);\n        border: 1px solid rgba(255, 255, 255, 0.08);\n        color: var(--color-text-muted);\n        transition: all 0.3s ease;\n      }\n\n      .social-link:hover {\n        background: rgba(0, 212, 255, 0.1);\n        border-color: rgba(0, 212, 255, 0.3);\n        color: var(--color-cyan);\n        transform: translateY(-3px);\n        box-shadow: 0 8px 20px rgba(0, 212, 255, 0.15);\n      }\n\n      .profile-school {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        color: var(--color-text-muted);\n        font-size: 0.95rem;\n      }\n
      .about-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      .bio-section {
        padding: 20px 0;
      }

      .bio-title {
        margin-bottom: 15px;
      }

      .code-tag {
        font-family: 'Fira Code', monospace;
        color: var(--color-purple);
        font-size: 1rem;
      }

      .bio-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--color-text-muted);
        margin-bottom: 20px;
      }

      .highlight {
        color: var(--color-cyan);
        font-weight: 500;
      }

      .focus-section {
        display: flex;
        gap: 20px;
        padding: 25px;
        align-items: flex-start;
      }

      .focus-icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
        flex-shrink: 0;
      }

      .focus-content h4 {
        font-size: 1.2rem;
        color: var(--color-text);
        margin-bottom: 10px;
      }

      .focus-content p {
        color: var(--color-text-muted);
        line-height: 1.7;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .stat-item {
        text-align: center;
        padding: 25px;
        background: rgba(17, 34, 64, 0.5);
        border-radius: 15px;
        border: 1px solid rgba(0, 212, 255, 0.1);
        transition: all 0.3s ease;
      }

      .stat-item:hover {
        border-color: rgba(0, 212, 255, 0.3);
        transform: translateY(-5px);
      }

      .stat-value {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .stat-label {
        color: var(--color-text-muted);
        font-size: 0.9rem;
      }

      @media (max-width: 1024px) {
        .about-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .about-card {
          position: static;
          max-width: 400px;
          margin: 0 auto;
        }
      }

      @media (max-width: 768px) {
        .stats-grid {
          grid-template-columns: 1fr;
        }

        .focus-section {
          flex-direction: column;
          text-align: center;
        }

        .focus-icon {
          margin: 0 auto;
        }
      }
    `,
  ],
})
export class AboutComponent {
  stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '6+', label: 'Technologies' },
    { value: '2+', label: 'Years Coding' },
  ];
}
