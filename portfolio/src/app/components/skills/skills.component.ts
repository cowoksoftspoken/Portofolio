import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Tool {
  name: string;
  icon: string;
  color: string;
}

interface Database {
  name: string;
  icon: string;
  color: string;
}

interface Learning {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'setya-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Skills & Technologies</span>
        </h2>

        <div class="skills-grid">
          <!-- Programming Languages -->
          <div class="skills-card glass-card fade-in">
            <div class="card-header">
              <div class="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Programming Languages</h3>
            </div>

            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of programmingSkills">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    [style.width.%]="animatedSkills ? skill.level : 0"
                    [style.background]="
                      'linear-gradient(90deg, ' + skill.color + ', var(--color-purple))'
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frameworks & Tools -->
          <div class="tools-card glass-card fade-in">
            <div class="card-header">
              <div class="card-icon">
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
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                  />
                </svg>
              </div>
              <h3>Frameworks & Tools</h3>
            </div>

            <div class="tools-grid">
              <div class="tool-badge" *ngFor="let tool of tools" [style.--tool-color]="tool.color">
                <span class="tool-icon">
                  <img [src]="tool.icon" alt="tool.name" />
                </span>
                <span class="tool-name">{{ tool.name }}</span>
              </div>
            </div>
          </div>

          <!-- Databases & ML -->
          <div class="db-card glass-card fade-in">
            <div class="card-header">
              <div class="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <h3>Databases & ML</h3>
            </div>

            <div class="db-grid">
              <div class="db-item" *ngFor="let db of databases" [style.--db-color]="db.color">
                <div class="db-icon">
                  <img [src]="db.icon" alt="db.name" />
                </div>
                <span class="db-name">{{ db.name }}</span>
              </div>
            </div>
          </div>

          <!-- Learning -->
          <div class="learning-card glass-card fade-in">
            <div class="card-header">
              <div class="card-icon pulse-icon">
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
                    d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"
                  />
                </svg>
              </div>
              <h3>Currently Learning</h3>
            </div>

            <div class="learning-items">
              <div class="learning-item" *ngFor="let item of learningItems">
                <div class="learning-badge">
                  <img [src]="item.icon" alt="item.name" />
                </div>
                <div class="learning-info">
                  <h4>{{ item.name }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }

      .skills-card,
      .tools-card,
      .db-card,
      .learning-card {
        padding: 35px;
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
      }

      .card-icon {
        width: 55px;
        height: 55px;
        border-radius: 15px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
      }

      .pulse-icon {
        animation: iconPulse 2s infinite;
      }

      @keyframes iconPulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4);
        }
        50% {
          box-shadow: 0 0 0 15px rgba(0, 212, 255, 0);
        }
      }

      .card-header h3 {
        font-size: 1.3rem;
        color: var(--color-text);
      }

      .skills-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .skill-item {
        width: 100%;
        min-width: 0;
      }

      .skill-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .skill-name {
        font-weight: 500;
        color: var(--color-text);
      }

      .skill-percentage {
        font-family: 'Fira Code', monospace;
        color: var(--color-cyan);
        font-size: 0.9rem;
      }

      .progress-bar {
        width: 100%;
        height: 10px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 10px;
        transition: width 1s ease-out;
      }

      .tools-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .tool-badge {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 18px;
        background: rgba(0, 212, 255, 0.08);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-radius: 25px;
        font-size: 0.9rem;
        color: var(--color-text);
        transition: all 0.3s ease;
      }

      .tool-badge:hover {
        background: rgba(0, 212, 255, 0.15);
        border-color: var(--tool-color, var(--color-cyan));
        transform: translateY(-3px);
      }

      .tool-icon {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tool-icon svg {
        width: 100%;
        height: 100%;
      }

      .db-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }

      .db-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 18px;
        background: rgba(26, 26, 26, 0.8);
        border-radius: 12px;
        border: 1px solid rgba(0, 212, 255, 0.1);
        transition: all 0.3s ease;
      }

      .db-item:hover {
        border-color: var(--db-color, var(--color-cyan));
        transform: translateX(5px);
      }

      .db-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .db-icon svg {
        width: 100%;
        height: 100%;
      }

      .db-name {
        color: var(--color-text);
        font-weight: 500;
      }

      .learning-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .learning-item {
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 20px;
        background: rgba(26, 26, 26, 0.8);
        border-radius: 15px;
        border: 1px solid rgba(124, 58, 237, 0.2);
        transition: all 0.3s ease;
      }

      .learning-item:hover {
        border-color: rgba(124, 58, 237, 0.4);
        background: rgba(124, 58, 237, 0.1);
      }

      .learning-badge {
        width: 55px;
        height: 55px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(0, 212, 255, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-cyan);
        flex-shrink: 0;
      }

      .learning-badge svg {
        width: 28px;
        height: 28px;
      }

      .learning-info h4 {
        color: var(--color-text);
        font-size: 1.1rem;
        margin-bottom: 5px;
      }

      .learning-info p {
        color: var(--color-text-muted);
        font-size: 0.9rem;
      }

      @media (max-width: 1024px) {
        .skills-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .db-grid {
          grid-template-columns: 1fr;
        }

        .tools-grid {
          justify-content: center;
        }

        .progress-bar {
          min-height: 12px;
          height: 12px;
        }

        .progress-fill {
          min-height: 12px;
        }
      }
    `,
  ],
})
export class SkillsComponent implements AfterViewInit {
  animatedSkills = false;

  programmingSkills: Skill[] = [
    { name: 'JavaScript', level: 95, color: '#f7df1e' },
    { name: 'TypeScript', level: 90, color: '#3178c6' },
    { name: 'Python', level: 66, color: '#3776ab' },
    { name: 'Java', level: 30, color: '#ed8b00' },
    { name: 'C++', level: 20, color: '#00599c' },
    { name: 'Rust', level: 5, color: '#dea584' },
  ];

  tools: Tool[] = [
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031', color: '#DD0031' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', color: '#ffffff' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000', color: '#000000' },
    { name: 'Bun', icon: 'https://cdn.simpleicons.org/bun/FBF0DF', color: '#FBF0DF' },
    { name: 'pnpm', icon: 'https://cdn.simpleicons.org/pnpm/F69220', color: '#F69220' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', color: '#06B6D4' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6', color: '#1572B6' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
    { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/ffffff', color: '#ffffff' },
  ];

  databases: Database[] = [
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28', color: '#FFCA28' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/ffffff', color: '#2D3748' },
    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', color: '#FF6F00' },
    {
      name: 'Scikit-learn',
      icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
      color: '#F7931E',
    },
  ];

  learningItems: Learning[] = [
    {
      name: 'Machine Learning',
      description: 'Neural networks, TensorFlow, scikit-learn',
      icon: 'https://api.iconify.design/mdi/brain.svg?color=%2300d4ff',
    },
    {
      name: 'Neural Networks',
      description: 'Deep learning architectures',
      icon: 'https://api.iconify.design/mdi/graph.svg?color=%2300d4ff',
    },
    {
      name: 'Artificial Intelligence',
      description: 'AI integration in real systems',
      icon: 'https://api.iconify.design/mdi/robot.svg?color=%2300d4ff',
    },
    {
      name: 'AI Integration',
      description: 'Real-world system integration',
      icon: 'https://api.iconify.design/mdi/head-cog.svg?color=%2300d4ff',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animatedSkills = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        observer.observe(skillsSection);
      }
    }, 100);
  }
}
