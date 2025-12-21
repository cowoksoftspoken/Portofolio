import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

@Component({
  selector: 'setya-projects',
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
            class="project-card glass-card project-animate"
            *ngFor="let project of displayedProjects; let i = index"
            [class.featured]="project.featured"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <!-- Project Icon -->
            <div class="project-icon">
              <img [src]="project.icon" [alt]="project.title" />
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
              <a
                *ngIf="project.githubUrl && !project.isPrivate"
                [href]="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link github"
                title="View on GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <span
                *ngIf="project.isPrivate"
                class="project-link private"
                title="Private Repository"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <a
                *ngIf="project.demoUrl"
                [href]="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link demo"
                title="Live Demo"
              >
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

        <!-- View More Button -->
        <div class="view-more-container" *ngIf="hasMoreItems">
          <button class="view-more-btn" (click)="toggleShowAll()">
            <span>{{ showAll ? 'Show Less' : 'View More Projects' }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              [class.rotated]="showAll"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        align-items: stretch;
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
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        padding: 15px;
      }

      .project-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }

      .project-content {
        flex: 1;
        display: flex;
        flex-direction: column;
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
        margin-top: 20px;
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
        gap: 12px;
        margin-top: 20px;
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
        text-decoration: none;
      }

      .project-link.github:hover {
        background: #24292e;
        color: white;
      }

      .project-link.demo:hover {
        background: var(--color-cyan);
        color: var(--color-navy);
      }

      .project-link.private {
        background: rgba(255, 193, 7, 0.1);
        color: #ffc107;
        cursor: default;
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

      .project-animate {
        animation: projectFadeIn 0.5s ease-out forwards;
        opacity: 0;
      }

      @keyframes projectFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .view-more-container {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }

      .view-more-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 32px;
        background: transparent;
        border: 2px solid var(--color-cyan);
        color: var(--color-cyan);
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .view-more-btn:hover {
        background: rgba(0, 212, 255, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
      }

      .view-more-btn svg {
        transition: transform 0.3s ease;
      }

      .view-more-btn svg.rotated {
        transform: rotate(180deg);
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
        'A multi-feature chat application with real-time voice and video calls, end-to-end encryption for secure messaging, and story functionality similar to popular social platforms.',
      tags: ['TypeScript', 'WebRTC', 'E2E Encryption', 'Firebase'],
      icon: 'https://api.iconify.design/mdi/chat-processing.svg',
      featured: true,
      isPrivate: true,
      demoUrl: 'https://chat.telepaty.my.id',
    },
    {
      title: 'YouTube Clone',
      description:
        'A full-featured YouTube clone built using the YouTube API with sensitive OAuth scopes, allowing users to authenticate and upload videos directly to their own YouTube accounts and allowing them to interact and comment on their own or others videos. Plus, the floating picture-in-picture video feature makes this YouTube clone very similar to the original.',
      tags: ['YouTube API', 'OAuth 2.0', 'Video Streaming'],
      icon: 'https://cdn.simpleicons.org/youtube/FF0000',
      featured: true,
      githubUrl: 'https://github.com/cowoksoftspoken/YouTube-Clone-Dev',
      demoUrl: 'https://youtubeclonedev.vercel.app',
    },
    {
      title: 'Secure File Destroyer',
      description:
        'A low-level file destruction tool that completely wipes files using hardware-level instructions, disk-fill techniques, and SSD-safe wiping algorithms.',
      tags: ['Low-level', 'Security', 'C++', 'File Systems'],
      icon: 'https://api.iconify.design/mdi/shield-lock.svg',
      featured: false,
      githubUrl: 'https://github.com/cowoksoftspoken/Secure_File_Destroyer',
    },
    {
      title: 'AnimeBase',
      description:
        'An anime database application powered by the Jikan API, featuring comprehensive anime information, search functionality, and a clean user interface.',
      tags: ['Jikan API', 'Angular', 'REST API'],
      icon: 'https://api.iconify.design/mdi/movie-open.svg',
      featured: false,
      githubUrl: 'https://github.com/cowoksoftspoken/animedata',
      demoUrl: 'https://animebase.vercel.app',
    },
    {
      title: 'Telegram Bot Spreadsheet',
      description:
        'A Telegram bot that collects user input through conversational interfaces and stores the data directly into spreadsheets for easy data management.',
      tags: ['Telegram Bot API', 'Google Sheets', 'Automation'],
      icon: 'https://cdn.simpleicons.org/telegram/26A5E4',
      featured: false,
      demoUrl: 'https://t.me/belajar9bot',
    },
  ];

  showAll = false;
  itemsToShow = 4;

  get displayedProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.slice(0, this.itemsToShow);
  }

  get hasMoreItems(): boolean {
    return this.projects.length > this.itemsToShow;
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
