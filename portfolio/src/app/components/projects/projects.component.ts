import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  featured: boolean;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Featured Projects</span>
        </h2>

        <p class="section-subtitle">
          A collection of projects I've built, from full-stack applications to low-level tools.
        </p>

        <div class="projects-grid">
          <div
            class="project-card glass-card fade-in"
            *ngFor="let project of projects; let i = index"
            [class.featured]="project.featured"
          >
            <!-- Project Icon -->
            <div class="project-icon">
              <span>{{ project.icon }}</span>
            </div>

            <!-- Project Content -->
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <!-- Tags -->
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>

            <!-- Project Links -->
            <div class="project-links">
              <a *ngIf="project.link" [href]="project.link" target="_blank" class="project-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            <!-- Decorative Elements -->
            <div class="project-decoration"></div>
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

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
      }

      .project-card {
        position: relative;
        padding: 35px;
        overflow: hidden;
        transition: all 0.4s ease;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .project-card:hover {
        transform: translateY(-10px);
      }

      .project-card.featured {
        grid-column: span 2;
        background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(124, 58, 237, 0.1));
      }

      .project-icon {
        width: 70px;
        height: 70px;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
      }

      .project-content {
        flex: 1;
      }

      .project-title {
        font-size: 1.4rem;
        color: var(--color-text);
        margin-bottom: 12px;
        font-weight: 600;
      }

      .project-description {
        color: var(--color-text-muted);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .tag {
        padding: 6px 14px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 20px;
        font-size: 0.8rem;
        color: var(--color-cyan);
        font-family: 'Fira Code', monospace;
      }

      .project-links {
        display: flex;
        gap: 15px;
      }

      .project-link {
        width: 45px;
        height: 45px;
        border-radius: 12px;
        background: rgba(0, 212, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
        transition: all 0.3s ease;
      }

      .project-link:hover {
        background: var(--color-cyan);
        color: var(--color-navy);
      }

      .project-decoration {
        position: absolute;
        top: -50px;
        right: -50px;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border-radius: 50%;
        opacity: 0.05;
        transition: all 0.5s ease;
      }

      .project-card:hover .project-decoration {
        transform: scale(1.5);
        opacity: 0.1;
      }

      @media (max-width: 900px) {
        .project-card.featured {
          grid-column: span 1;
        }
      }

      @media (max-width: 640px) {
        .projects-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Telepaty',
      description:
        'A multi-feature chat application with real-time voice calls, end-to-end encryption for secure messaging, and story functionality similar to popular social platforms.',
      tags: ['TypeScript', 'WebRTC', 'E2E Encryption', 'Real-time'],
      icon: '💬',
      featured: true,
    },
    {
      title: 'YouTube Clone',
      description:
        'Full-featured YouTube clone built using the YouTube API with sensitive OAuth scopes, enabling users to authenticate and upload videos directly to their own YouTube accounts.',
      tags: ['YouTube API', 'OAuth 2.0', 'Video Streaming'],
      icon: '▶️',
      featured: true,
    },
    {
      title: 'Secure File Destroyer',
      description:
        'A low-level file destruction tool that completely wipes files using hardware-level instructions, disk-fill techniques, and SSD-safe wiping algorithms.',
      tags: ['Low-level', 'Security', 'C++', 'File Systems'],
      icon: '🔒',
      featured: false,
    },
    {
      title: 'AnimeBase',
      description:
        'An anime database application powered by the Jikan API, featuring comprehensive anime information, search functionality, and a clean user interface.',
      tags: ['Jikan API', 'Angular', 'REST API'],
      icon: '🎬',
      featured: false,
    },
    {
      title: 'Telegram Bot Spreadsheet',
      description:
        'A Telegram bot that collects user input through conversational interfaces and stores the data directly into spreadsheets for easy data management.',
      tags: ['Telegram Bot API', 'Google Sheets', 'Automation'],
      icon: '🤖',
      featured: false,
    },
  ];
}
