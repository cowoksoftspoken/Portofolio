import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'setya-hero',
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
        <div class="terminal" [class.terminal-visible]="terminalVisible">
          <div class="terminal-header">
            <div class="terminal-controls">
              <span class="control close"></span>
              <span class="control minimize"></span>
              <span class="control maximize"></span>
            </div>
            <div class="terminal-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              <span>{{ terminalPhase === 'output' ? 'terminal' : 'developer.ts' }}</span>
            </div>
            <div class="terminal-actions">
              <span class="action-dot" [class.running]="terminalPhase === 'running'"></span>
            </div>
          </div>
          <div class="terminal-body">
            <ng-container *ngIf="terminalPhase === 'code' || terminalPhase === 'running'">
              <div
                class="terminal-line"
                *ngFor="let line of terminalLines; let i = index"
                [class.visible]="i < currentLineIndex"
              >
                <span class="line-number">{{ i + 1 }}</span>
                <span class="line-content" [innerHTML]="line"></span>
              </div>
            </ng-container>
            <div
              class="terminal-run"
              *ngIf="terminalPhase === 'running' || terminalPhase === 'output'"
              [class.visible]="showRunCommand"
            >
              <span class="run-prompt">$</span>
              <span class="run-command">npx ts-node developer.ts</span>
              <span class="run-spinner" *ngIf="terminalPhase === 'running'"></span>
            </div>
            <ng-container *ngIf="terminalPhase === 'output'">
              <div class="terminal-output">
                <div
                  class="output-line"
                  *ngFor="let line of outputLines; let i = index"
                  [class.visible]="i < currentOutputIndex"
                  [class.success]="line.type === 'success'"
                  [class.info]="line.type === 'info'"
                  [class.highlight]="line.type === 'highlight'"
                >
                  <span [innerHTML]="line.content"></span>
                </div>
              </div>
            </ng-container>
            <div class="terminal-cursor" *ngIf="showCursor && terminalPhase !== 'running'">
              <span class="cursor-prefix" *ngIf="terminalPhase === 'output'">$</span>
              <span class="cursor-block">▊</span>
            </div>
          </div>
          <div class="terminal-glow"></div>
          <div class="terminal-scanline"></div>
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

      .terminal {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        width: 400px;
        background: rgba(13, 13, 13, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-50%) translateX(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .terminal.terminal-visible {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }

      .terminal:hover {
        transform: translateY(-50%) scale(1.02);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 212, 255, 0.1);
      }

      .terminal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: rgba(26, 26, 26, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      .terminal-controls {
        display: flex;
        gap: 8px;
      }

      .control {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      .control:hover {
        transform: scale(1.2);
      }
      .control.close {
        background: #ff5f56;
      }
      .control.minimize {
        background: #ffbd2e;
      }
      .control.maximize {
        background: #27ca40;
      }

      .terminal-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--color-text-muted);
        font-size: 0.8rem;
      }

      .terminal-actions {
        display: flex;
        align-items: center;
      }

      .action-dot {
        width: 8px;
        height: 8px;
        background: #27ca40;
        border-radius: 50%;
      }

      .action-dot.running {
        background: #ffbd2e;
        animation: pulse-running 0.5s ease-in-out infinite;
      }

      @keyframes pulse-running {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
      }

      .terminal-body {
        padding: 16px;
        max-height: 320px;
        overflow-y: auto;
      }

      .terminal-line {
        display: flex;
        gap: 16px;
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.2s ease;
      }

      .terminal-line.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .line-number {
        color: rgba(255, 255, 255, 0.2);
        min-width: 20px;
        text-align: right;
        user-select: none;
      }

      .line-content {
        flex: 1;
        color: #e8e8e8;
      }
      .line-content :deep(.keyword) {
        color: #c792ea;
      }
      .line-content :deep(.type) {
        color: #82aaff;
      }
      .line-content :deep(.string) {
        color: #c3e88d;
      }
      .line-content :deep(.property) {
        color: #f78c6c;
      }
      .line-content :deep(.bracket) {
        color: #89ddff;
      }
      .line-content :deep(.boolean) {
        color: #f78c6c;
      }
      .line-content :deep(.method) {
        color: #82aaff;
      }

      .terminal-run {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.3s ease;
      }

      .terminal-run.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .run-prompt {
        color: #00ff88;
        font-weight: 600;
      }
      .run-command {
        color: #e8e8e8;
      }

      .run-spinner {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(0, 212, 255, 0.3);
        border-top-color: var(--color-cyan);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .terminal-output {
        margin-top: 16px;
      }

      .output-line {
        font-size: 0.8rem;
        line-height: 1.6;
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.2s ease;
      }

      .output-line.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .output-line.success {
        color: #00ff88;
      }
      .output-line.info {
        color: #9ca3af;
      }
      .output-line.highlight {
        color: var(--color-cyan);
      }
      .output-line :deep(.output-label) {
        color: #82aaff;
        font-weight: 600;
      }
      .output-line :deep(.output-key) {
        color: #f78c6c;
      }

      .terminal-cursor {
        display: flex;
        align-items: center;
        margin-top: 8px;
      }

      .cursor-prefix {
        color: #00ff88;
        font-weight: 600;
        margin-right: 8px;
      }

      .cursor-block {
        color: var(--color-cyan);
        animation: cursorBlink 1s step-end infinite;
      }

      @keyframes cursorBlink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      .terminal-glow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%);
        pointer-events: none;
      }

      .terminal-scanline {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.03) 2px,
          rgba(0, 0, 0, 0.03) 4px
        );
        pointer-events: none;
        animation: scanline 8s linear infinite;
      }

      @keyframes scanline {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(4px);
        }
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

  terminalVisible = false;
  showCursor = true;
  currentLineIndex = 0;
  terminalPhase: 'code' | 'running' | 'output' = 'code';
  showRunCommand = false;
  currentOutputIndex = 0;

  terminalLines = [
    '<span class="keyword">const</span> <span class="property">developer</span>: <span class="type">DeveloperLife</span> = <span class="bracket">{</span>',
    '  <span class="property">name</span>: <span class="string">"Inggrit Setya Budi"</span>,',
    '  <span class="property">role</span>: <span class="string">"Software Engineer"</span>,',
    '  <span class="property">passion</span>: <span class="bracket">[</span><span class="string">"Web"</span>, <span class="string">"AI"</span>, <span class="string">"Mobile"</span><span class="bracket">]</span>,',
    '  <span class="property">coffee</span>: <span class="boolean">true</span>,',
    '  <span class="property">github</span>: <span class="string">"github.com/cowoksoftspoken"</span>,',
    '<span class="bracket">}</span>;',
    '',
    '<span class="keyword">console</span>.<span class="method">log</span>(<span class="property">developer</span>);',
  ];

  outputLines = [
    { type: 'info', content: '✨ Compiling TypeScript...' },
    { type: 'success', content: '✓ Build successful!' },
    { type: 'info', content: '' },
    { type: 'highlight', content: '┌─────────────────────────────────┐' },
    {
      type: 'highlight',
      content: '│  <span class="output-label">Developer Profile</span>              │',
    },
    { type: 'highlight', content: '├─────────────────────────────────┤' },
    {
      type: 'info',
      content: '│  <span class="output-key">Name:</span>    Inggrit Setya Budi    │',
    },
    {
      type: 'info',
      content: '│  <span class="output-key">Role:</span>    Software Engineer     │',
    },
    {
      type: 'info',
      content: '│  <span class="output-key">Passion:</span> Web, AI, Mobile       │',
    },
    {
      type: 'success',
      content: '│  <span class="output-key">Coffee:</span>  ☕ Always ready!       │',
    },
    { type: 'highlight', content: '└─────────────────────────────────┘' },
  ];

  ngAfterViewInit() {
    setTimeout(() => this.typeRole(), 500);
    // Start terminal animation
    setTimeout(() => {
      this.terminalVisible = true;
      this.animateTerminalLines();
    }, 800);
  }

  animateTerminalLines() {
    if (this.currentLineIndex < this.terminalLines.length) {
      this.currentLineIndex++;
      setTimeout(() => this.animateTerminalLines(), 180);
    } else {
      // Code finished, start run phase
      setTimeout(() => this.startRunPhase(), 800);
    }
  }

  startRunPhase() {
    this.terminalPhase = 'running';
    this.showCursor = false;
    this.showRunCommand = true;
    // Simulate running time
    setTimeout(() => this.startOutputPhase(), 1500);
  }

  startOutputPhase() {
    this.terminalPhase = 'output';
    this.showCursor = true;
    this.animateOutputLines();
  }

  animateOutputLines() {
    if (this.currentOutputIndex < this.outputLines.length) {
      this.currentOutputIndex++;
      const delay = this.currentOutputIndex <= 2 ? 300 : 120;
      setTimeout(() => this.animateOutputLines(), delay);
    }
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
