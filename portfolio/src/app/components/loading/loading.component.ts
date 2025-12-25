import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'setya-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-screen" [class.fade-out]="fadeOut">
      <div class="loading-content">
        <div class="logo-container" [class.assembled]="assembled">
          <span class="logo-part part-1" [class.in]="animStep >= 1">&lt;</span>
          <span class="logo-part part-2" [class.in]="animStep >= 2">S</span>
          <span class="logo-part part-3" [class.in]="animStep >= 3">e</span>
          <span class="logo-part part-4" [class.in]="animStep >= 4">t</span>
          <span class="logo-part part-5" [class.in]="animStep >= 5">y</span>
          <span class="logo-part part-6" [class.in]="animStep >= 6">a</span>
          <span class="logo-part part-7" [class.in]="animStep >= 7">/</span>
          <span class="logo-part part-8" [class.in]="animStep >= 8">&gt;</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" [style.width.%]="progress"></div>
        </div>
        <div class="progress-text">{{ progress }}%</div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        transition: opacity 0.8s ease;
      }

      .loading-screen.fade-out {
        opacity: 0;
        pointer-events: none;
      }

      .loading-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .logo-container {
        display: flex;
        align-items: center;
        font-family: 'Fira Code', monospace;
        font-size: clamp(2.5rem, 8vw, 4rem);
        font-weight: 700;
      }

      .logo-part {
        display: inline-block;
        opacity: 0;
        color: #666;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .logo-part.in {
        opacity: 1;
      }

      .part-1 {
        color: #00d4ff;
        transform: translateX(-50px) translateY(-30px) scale(0.5) rotate(-20deg);
      }
      .part-1.in {
        transform: translateX(0) translateY(0) scale(1) rotate(0deg);
      }

      .part-2 {
        transform: translateY(-60px) scale(0.3) rotate(30deg);
      }
      .part-2.in {
        transform: translateY(0) scale(1) rotate(0deg);
      }

      .part-3 {
        transform: translateX(40px) translateY(50px) scale(0.4) rotate(-15deg);
      }
      .part-3.in {
        transform: translateX(0) translateY(0) scale(1) rotate(0deg);
      }

      .part-4 {
        transform: translateY(-40px) translateX(-30px) scale(0.6) rotate(25deg);
      }
      .part-4.in {
        transform: translateY(0) translateX(0) scale(1) rotate(0deg);
      }

      .part-5 {
        transform: translateY(60px) scale(0.3) rotate(-30deg);
      }
      .part-5.in {
        transform: translateY(0) scale(1) rotate(0deg);
      }

      .part-6 {
        transform: translateX(-50px) translateY(30px) scale(0.5) rotate(20deg);
      }
      .part-6.in {
        transform: translateX(0) translateY(0) scale(1) rotate(0deg);
      }

      .part-7 {
        color: #00d4ff;
        transform: translateY(-50px) translateX(30px) scale(0.4) rotate(-25deg);
      }
      .part-7.in {
        transform: translateY(0) translateX(0) scale(1) rotate(0deg);
      }

      .part-8 {
        color: #00d4ff;
        transform: translateX(50px) translateY(30px) scale(0.5) rotate(20deg);
      }
      .part-8.in {
        transform: translateX(0) translateY(0) scale(1) rotate(0deg);
      }

      .logo-container.assembled .logo-part {
        color: #e8e8e8;
        text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
      }

      .logo-container.assembled .part-1,
      .logo-container.assembled .part-7,
      .logo-container.assembled .part-8 {
        color: #00d4ff;
        text-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
      }

      .progress-container {
        width: 200px;
        height: 3px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #00d4ff, #8b5cf6);
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
      }

      .progress-text {
        font-family: 'Fira Code', monospace;
        font-size: 0.8rem;
        color: #666;
        letter-spacing: 0.1em;
      }

      @media (max-width: 768px) {
        .progress-container {
          width: 150px;
        }
      }
    `,
  ],
})
export class LoadingComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();

  progress = 0;
  animStep = 0;
  assembled = false;
  fadeOut = false;

  private readonly TOTAL_DURATION = 3000;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    const startTime = Date.now();

    // Use requestAnimationFrame for smooth animation
    const animate = () => {
      const elapsed = Date.now() - startTime;

      // Update logo steps
      const logoStep = Math.min(Math.floor(elapsed / 180) + 1, 8);
      if (logoStep !== this.animStep) {
        this.animStep = logoStep;
        if (logoStep >= 8) {
          this.assembled = true;
        }
      }

      // Update progress
      const newProgress = Math.min(Math.floor((elapsed / this.TOTAL_DURATION) * 100), 100);
      if (newProgress !== this.progress) {
        this.progress = newProgress;
      }

      // Force change detection
      this.cdr.detectChanges();

      // Continue animation or finish
      if (elapsed < this.TOTAL_DURATION) {
        requestAnimationFrame(animate);
      } else {
        this.progress = 100;
        this.cdr.detectChanges();

        setTimeout(() => {
          this.fadeOut = true;
          this.cdr.detectChanges();

          setTimeout(() => {
            document.body.style.overflow = '';
            this.loadingComplete.emit();
          }, 800);
        }, 400);
      }
    };

    // Start animation
    requestAnimationFrame(animate);
  }
}
