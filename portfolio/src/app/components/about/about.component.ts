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
            <div class="profile-image">
              <div class="image-placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div class="status-badge">
                <span class="status-dot"></span>
                Open to opportunities
              </div>
            </div>

            <div class="profile-info">
              <h3 class="profile-name">Setya B</h3>
              <p class="profile-title">Software Engineering Student</p>
              <p class="profile-school">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                SMK Krian 1 - RPL
              </p>
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

      .about-card {
        padding: 40px 30px;
        text-align: center;
        position: sticky;
        top: 100px;
      }

      .profile-image {
        margin-bottom: 25px;
      }

      .image-placeholder {
        width: 150px;
        height: 150px;
        margin: 0 auto 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: relative;
      }

      .image-placeholder::before {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        z-index: -1;
        opacity: 0.5;
        filter: blur(10px);
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 20px;
        font-size: 0.85rem;
        color: var(--color-cyan);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background: #00ff88;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.2);
        }
      }

      .profile-name {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 8px;
      }

      .profile-title {
        color: var(--color-cyan);
        font-weight: 500;
        margin-bottom: 15px;
      }

      .profile-school {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: var(--color-text-muted);
        font-size: 0.95rem;
      }

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
