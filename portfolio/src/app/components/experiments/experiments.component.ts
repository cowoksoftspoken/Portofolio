import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experiment {
  id: string;
  title: string;
  description: string;
  problem: string;
  realWorld: string;
  tradeOffs: string[];
}

@Component({
  selector: 'setya-experiments',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="experiments" class="section">
      <div class="container">
        <h2 class="section-title">
          <span class="gradient-text">Experiments</span>
        </h2>

        <!-- Why this exists -->
        <p class="why-exists">
          This section exists to demonstrate how frontend frameworks and platforms communicate
          intent through DOM structure, markers, and runtime behavior.
        </p>

        <!-- Philosophy Statement -->
        <div class="philosophy-statement">
          <div class="philosophy-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <p>These experiments explore how frontend systems work beneath framework abstractions.</p>
        </div>

        <!-- Experiments Grid -->
        <div class="experiments-grid">
          <!-- Experiment 1: DOM Marker Engine -->
          <div class="experiment-card glass-card">
            <div class="experiment-header">
              <span class="experiment-number">01</span>
              <h3 class="experiment-title">DOM Marker Engine</h3>
            </div>

            <p class="experiment-description">
              Demonstrate how an engine can use HTML comment markers as internal namespaces or
              signals.
            </p>

            <!-- Interactive Demo -->
            <div class="demo-container">
              <div class="demo-label">Interactive Demo</div>
              <div class="dom-marker-demo" id="marker-demo-container">
                <div id="renderer-marker-zone"></div>
                <setya-text-renderer data-engine="active">
                  This content is rendered by <code>&lt;setya-text-renderer&gt;</code>
                </setya-text-renderer>
                <div id="renderer-marker-end-zone"></div>

                <div id="hydrate-marker-zone"></div>
                <setya-counter-widget data-hydrate="pending">
                  Counter: <span class="counter-value">0</span>
                </setya-counter-widget>
                <div id="hydrate-marker-end-zone"></div>

                <div class="regular-content">This is regular DOM content (no markers)</div>
              </div>

              <div class="demo-controls">
                <button class="demo-btn" (click)="scanForMarkers()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  Scan for Markers
                </button>
              </div>

              <!-- Scan Results -->
              <div class="scan-results" *ngIf="markerScanResults.length > 0">
                <div class="result-header">Detected Markers:</div>
                <div class="result-item" *ngFor="let result of markerScanResults">
                  <span class="marker-type">{{ result.type }}</span>
                  <span class="marker-element">{{ result.element }}</span>
                </div>
              </div>
            </div>

            <!-- Explanation -->
            <div class="explanation">
              <div class="explanation-section">
                <h4>What it demonstrates</h4>
                <p>
                  How engines can use HTML comments (<code>&lt;!-- setya:hydrate --&gt;</code>) and
                  custom elements (<code>&lt;setya-*&gt;</code>) as internal signals for conditional
                  rendering.
                </p>
              </div>
              <div class="explanation-section">
                <h4>Why comments are safer than attributes</h4>
                <p>
                  Comments are invisible to CSS selectors and don't pollute the element's attribute
                  namespace. They act as pure metadata signals.
                </p>
              </div>
              <div class="explanation-section">
                <h4>Real-world usage</h4>
                <p>
                  Frameworks like Qwik, Astro, and Angular use similar markers for hydration
                  boundaries and lazy-loading signals.
                </p>
              </div>
              <div class="trade-offs">
                <span class="trade-off-label">Trade-offs:</span>
                <span class="trade-off-item">Comments can be stripped by minifiers</span>
                <span class="trade-off-item">Requires DOM traversal</span>
              </div>

              <!-- Source Links -->
              <div class="source-links">
                <a
                  href="https://github.com/cowoksoftspoken/Portofolio"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                  View source
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  TreeWalker API (MDN)
                </a>
              </div>
            </div>
          </div>

          <!-- Experiment 2: Shadow DOM vs CSS Scoping -->
          <div class="experiment-card glass-card">
            <div class="experiment-header">
              <span class="experiment-number">02</span>
              <h3 class="experiment-title">Shadow DOM vs CSS Scoping</h3>
            </div>

            <p class="experiment-description">
              Compare native Shadow DOM encapsulation with framework-based CSS scoping.
            </p>

            <!-- Interactive Demo -->
            <div class="demo-container">
              <div class="demo-label">Interactive Demo</div>
              <div class="scoping-demo">
                <div class="scoping-column">
                  <div class="column-label">Shadow DOM (Native)</div>
                  <div id="shadow-host" class="shadow-host-container"></div>
                </div>
                <div class="scoping-column">
                  <div class="column-label">Angular Scoped (Framework)</div>
                  <div class="angular-scoped-demo">
                    <h4 class="scoped-heading">Styled Heading</h4>
                    <p class="scoped-text">
                      This text is scoped via Angular's emulated encapsulation.
                    </p>
                    <button class="scoped-button">Scoped Button</button>
                  </div>
                </div>
              </div>

              <div class="demo-controls">
                <button class="demo-btn" (click)="toggleGlobalStyle()">
                  {{ globalStyleActive ? 'Remove' : 'Inject' }} Global Style
                </button>
                <span class="demo-hint"
                  >Try injecting a global <code>h4 &#123; color: red; &#125;</code></span
                >
              </div>

              <div class="style-status" *ngIf="globalStyleActive">
                <span class="status-indicator active"></span>
                Global style active - Shadow DOM unaffected, Angular scoped potentially affected
              </div>
            </div>

            <!-- Explanation -->
            <div class="explanation">
              <div class="explanation-section">
                <h4>What it demonstrates</h4>
                <p>
                  Shadow DOM creates a true boundary that global styles cannot pierce. Angular's
                  scoped styles use attribute selectors that can still be overridden.
                </p>
              </div>
              <div class="explanation-section">
                <h4>Real-world usage</h4>
                <p>
                  Design systems like Shoelace, Lion, and Material Web use Shadow DOM for guaranteed
                  isolation across different host applications.
                </p>
              </div>
              <div class="trade-offs">
                <span class="trade-off-label">Trade-offs:</span>
                <span class="trade-off-item">Shadow DOM has limited SSR support</span>
                <span class="trade-off-item"
                  >Styling across boundary requires CSS custom properties</span
                >
                <span class="trade-off-item">Framework scoping is simpler but weaker</span>
              </div>

              <!-- Source Links -->
              <div class="source-links">
                <a
                  href="https://github.com/cowoksoftspoken/Portofolio"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                  View source
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Shadow DOM (MDN)
                </a>
              </div>
            </div>
          </div>

          <!-- Experiment 3: Partial Hydration -->
          <div class="experiment-card glass-card">
            <div class="experiment-header">
              <span class="experiment-number">03</span>
              <h3 class="experiment-title">Partial Hydration (Simulated)</h3>
            </div>

            <p class="experiment-description">
              Simulate partial hydration where components activate based on visibility.
            </p>

            <!-- Interactive Demo -->
            <div class="demo-container">
              <div class="demo-label">Interactive Demo</div>

              <div class="hydration-demo">
                <!-- Above the fold - immediate -->
                <div class="hydration-component immediate" [class.hydrated]="aboveFoldHydrated">
                  <div class="hydration-status">
                    <span class="status-dot" [class.active]="aboveFoldHydrated"></span>
                    {{ aboveFoldHydrated ? 'Hydrated' : 'Static' }}
                  </div>
                  <div class="component-label">Above Fold Component</div>
                  <div class="component-demo">
                    <span class="counter-display">{{ aboveFoldCounter }}</span>
                    <button
                      class="counter-btn"
                      (click)="incrementAboveFold()"
                      [disabled]="!aboveFoldHydrated"
                    >
                      +
                    </button>
                  </div>
                  <div class="hydration-note">Hydrated immediately on page load</div>
                </div>

                <!-- Below the fold - lazy -->
                <div
                  class="hydration-component lazy"
                  [class.hydrated]="belowFoldHydrated"
                  #lazyComponent
                >
                  <div class="hydration-status">
                    <span class="status-dot" [class.active]="belowFoldHydrated"></span>
                    {{ belowFoldHydrated ? 'Hydrated' : 'Pending' }}
                  </div>
                  <div class="component-label">Below Fold Component</div>
                  <div class="component-demo">
                    <span class="counter-display">{{ belowFoldCounter }}</span>
                    <button
                      class="counter-btn"
                      (click)="incrementBelowFold()"
                      [disabled]="!belowFoldHydrated"
                    >
                      +
                    </button>
                  </div>
                  <div class="hydration-note">
                    {{
                      belowFoldHydrated ? 'Activated on visibility' : 'Scroll into view to hydrate'
                    }}
                  </div>
                </div>
              </div>

              <div class="hydration-log" *ngIf="hydrationLog.length > 0">
                <div class="log-header">Hydration Log:</div>
                <div class="log-entry" *ngFor="let entry of hydrationLog">
                  <span class="log-time">{{ entry.time }}</span>
                  <span class="log-message">{{ entry.message }}</span>
                </div>
              </div>
            </div>

            <!-- Explanation -->
            <div class="explanation">
              <div class="explanation-section">
                <h4>What it demonstrates</h4>
                <p>
                  Progressive hydration reduces initial JavaScript execution by only activating
                  visible components. Below-fold content remains static until scrolled into view.
                </p>
              </div>
              <div class="explanation-section">
                <h4>Real-world usage</h4>
                <p>
                  Used by Astro (Islands), Qwik (resumability), and Next.js (React Server
                  Components) to improve Time to Interactive (TTI).
                </p>
              </div>
              <div class="trade-offs">
                <span class="trade-off-label">Trade-offs:</span>
                <span class="trade-off-item">Added complexity in state management</span>
                <span class="trade-off-item">Potential flash of inactive content</span>
                <span class="trade-off-item">Requires careful boundary planning</span>
              </div>

              <!-- Source Links -->
              <div class="source-links">
                <a
                  href="https://github.com/cowoksoftspoken/Portofolio"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                  View source
                </a>
                <a
                  href="https://www.patterns.dev/posts/islands-architecture"
                  target="_blank"
                  rel="noopener"
                  class="source-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Islands Architecture
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .philosophy-statement {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin: -30px auto 60px;
        padding: 20px 30px;
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-radius: 12px;
        max-width: 700px;
      }

      .philosophy-icon {
        color: var(--color-cyan);
        flex-shrink: 0;
      }

      .philosophy-statement p {
        color: var(--color-text-muted);
        font-size: 1rem;
        font-style: italic;
        margin: 0;
      }

      .experiments-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 30px;
        align-items: stretch;
      }

      .scan-results::-webkit-scrollbar {
        width: 4px;
      }
      .scan-results::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 4px;
      }

      .experiment-card {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-height: 1200px;
      }

      .experiment-header {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .experiment-number {
        font-family: 'Fira Code', monospace;
        font-size: 0.9rem;
        color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.1);
        padding: 6px 12px;
        border-radius: 6px;
        font-weight: 600;
      }

      .experiment-title {
        font-size: 1.3rem;
        color: var(--color-text);
        margin: 0;
      }

      .experiment-description {
        color: var(--color-text-muted);
        line-height: 1.6;
        margin: 0;
      }

      .demo-container {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 20px;
      }

      .demo-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--color-cyan);
        margin-bottom: 15px;
        font-weight: 600;
      }

      /* DOM Marker Demo */
      .dom-marker-demo {
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        padding: 15px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 8px;
        margin-bottom: 15px;
      }

      .dom-marker-demo setya-text-renderer {
        display: block;
        padding: 10px;
        background: rgba(0, 212, 255, 0.1);
        border-left: 3px solid var(--color-cyan);
        margin-bottom: 10px;
        color: var(--color-text);
      }

      .dom-marker-demo setya-counter-widget {
        display: block;
        padding: 10px;
        background: rgba(124, 58, 237, 0.1);
        border-left: 3px solid var(--color-purple);
        margin-bottom: 10px;
        color: var(--color-text);
      }

      .dom-marker-demo setya-counter-widget[data-hydrate='active'] {
        border-left-color: #10b981;
        background: rgba(16, 185, 129, 0.1);
      }

      .counter-value {
        font-weight: 700;
        color: var(--color-cyan);
      }

      .regular-content {
        padding: 10px;
        color: var(--color-text-muted);
        font-style: italic;
      }

      .demo-controls {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
      }

      .demo-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 8px;
        color: var(--color-cyan);
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .demo-btn:hover {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(124, 58, 237, 0.3));
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
      }

      .demo-hint {
        font-size: 0.8rem;
        color: var(--color-text-muted);
      }

      .demo-hint code {
        background: rgba(0, 0, 0, 0.3);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
      }

      .scan-results {
        margin-top: 15px;
        padding: 15px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        overflow-y: auto;
        max-height: 80px;
      }

      .result-header {
        font-size: 0.85rem;
        color: var(--color-text);
        margin-bottom: 10px;
        font-weight: 600;
      }

      .result-item {
        display: flex;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        font-family: 'Fira Code', monospace;
        font-size: 0.8rem;
      }

      .result-item:last-child {
        border-bottom: none;
      }

      .marker-type {
        color: var(--color-cyan);
        background: rgba(0, 212, 255, 0.1);
        padding: 2px 8px;
        border-radius: 4px;
      }

      .marker-element {
        color: var(--color-text-muted);
      }

      /* Scoping Demo */
      .scoping-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 15px;
      }

      .scoping-column {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .column-label {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .shadow-host-container,
      .angular-scoped-demo {
        padding: 15px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        min-height: 120px;
      }

      .angular-scoped-demo .scoped-heading {
        font-size: 1.1rem;
        color: var(--color-cyan);
        margin: 0 0 10px 0;
      }

      .angular-scoped-demo .scoped-text {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        margin: 0 0 15px 0;
      }

      .angular-scoped-demo .scoped-button {
        padding: 8px 16px;
        background: var(--color-purple);
        border: none;
        border-radius: 6px;
        color: white;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .angular-scoped-demo .scoped-button:hover {
        background: var(--color-purple-light);
      }

      .style-status {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        padding: 10px 15px;
        background: rgba(255, 193, 7, 0.1);
        border-radius: 6px;
        font-size: 0.85rem;
        color: #ffc107;
      }

      .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #6b7280;
      }

      .status-indicator.active {
        background: #10b981;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
      }

      /* Hydration Demo */
      .hydration-demo {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 15px;
      }

      .hydration-component {
        padding: 20px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        border: 2px dashed rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }

      .hydration-component.hydrated {
        border-color: rgba(16, 185, 129, 0.5);
        background: rgba(16, 185, 129, 0.05);
      }

      .hydration-status {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.8rem;
        margin-bottom: 10px;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #6b7280;
      }

      .status-dot.active {
        background: #10b981;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      .component-label {
        font-size: 1rem;
        color: var(--color-text);
        margin-bottom: 15px;
        font-weight: 500;
      }

      .component-demo {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
      }

      .counter-display {
        font-family: 'Fira Code', monospace;
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-cyan);
        min-width: 60px;
        text-align: center;
      }

      .counter-btn {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
        border: none;
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .counter-btn:hover:not(:disabled) {
        transform: scale(1.1);
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
      }

      .counter-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .hydration-note {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        font-style: italic;
      }

      .hydration-log {
        padding: 15px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        font-family: 'Fira Code', monospace;
      }

      .log-header {
        font-size: 0.8rem;
        color: var(--color-text);
        margin-bottom: 10px;
        font-weight: 600;
      }

      .log-entry {
        display: flex;
        gap: 15px;
        padding: 5px 0;
        font-size: 0.8rem;
      }

      .log-time {
        color: var(--color-text-muted);
      }

      .log-message {
        color: #10b981;
      }

      /* Explanation Section */
      .explanation {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .explanation-section h4 {
        font-size: 0.9rem;
        color: var(--color-text);
        margin: 0 0 8px 0;
      }

      .explanation-section p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        line-height: 1.6;
        margin: 0;
      }

      .explanation-section code {
        background: rgba(0, 0, 0, 0.3);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
        font-size: 0.8rem;
        color: var(--color-cyan);
      }

      .trade-offs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
      }

      .trade-off-label {
        font-size: 0.8rem;
        color: var(--color-text);
        font-weight: 500;
      }

      .trade-off-item {
        font-size: 0.75rem;
        color: #fbbf24;
        background: rgba(251, 191, 36, 0.1);
        padding: 4px 10px;
        border-radius: 20px;
        border: 1px solid rgba(251, 191, 36, 0.2);
      }

      .why-exists {
        text-align: center;
        color: var(--color-text-muted);
        font-size: 1.1rem;
        max-width: 700px;
        margin: -30px auto 43px;
        line-height: 1.6;
      }

      /* Source Links */
      .source-links {
        display: flex;
        gap: 20px;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        flex-wrap: wrap;
      }

      .source-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        color: var(--color-cyan);
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .source-link:hover {
        color: var(--color-purple-light);
        transform: translateX(3px);
      }

      .source-link svg {
        opacity: 0.7;
        transition: opacity 0.3s ease;
      }

      .source-link:hover svg {
        opacity: 1;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .experiments-grid {
          grid-template-columns: 1fr;
        }

        .philosophy-statement {
          flex-direction: column;
          text-align: center;
          padding: 20px;
        }

        .experiment-card {
          max-height: 100%;
        }

        .scoping-demo {
          grid-template-columns: 1fr;
        }

        .demo-controls {
          flex-direction: column;
          align-items: stretch;
        }

        .demo-hint {
          text-align: center;
        }
      }
    `,
  ],
})
export class ExperimentsComponent implements OnInit, AfterViewInit {
  // DOM Marker state
  markerScanResults: { type: string; element: string }[] = [];

  // Shadow DOM state
  globalStyleActive = false;
  private globalStyleElement: HTMLStyleElement | null = null;

  // Partial Hydration state
  aboveFoldHydrated = false;
  belowFoldHydrated = false;
  aboveFoldCounter = 0;
  belowFoldCounter = 0;
  hydrationLog: { time: string; message: string }[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.aboveFoldHydrated = true;
      this.logHydration('Above Fold component hydrated (immediate)');
    }, 500);
  }

  ngAfterViewInit() {
    this.injectDomMarkers();
    this.initShadowDomDemo();
    this.initPartialHydrationObserver();
  }

  private injectDomMarkers() {
    const container = document.getElementById('marker-demo-container');
    if (!container) return;
    const rendererStart = document.createComment(' setya:renderer:start ');
    const rendererEnd = document.createComment(' setya:renderer:end ');
    const hydrateStart = document.createComment(' setya:hydrate ');
    const hydrateEnd = document.createComment(' setya:hydrate:end ');

    const zone1 = document.getElementById('renderer-marker-zone');
    const zone2 = document.getElementById('renderer-marker-end-zone');
    const zone3 = document.getElementById('hydrate-marker-zone');
    const zone4 = document.getElementById('hydrate-marker-end-zone');

    if (zone1) zone1.replaceWith(rendererStart);
    if (zone2) zone2.replaceWith(rendererEnd);
    if (zone3) zone3.replaceWith(hydrateStart);
    if (zone4) zone4.replaceWith(hydrateEnd);
  }

  scanForMarkers() {
    const demoContainer = document.querySelector('.dom-marker-demo');
    if (!demoContainer) return;

    this.markerScanResults = [];
    const walker = document.createTreeWalker(
      demoContainer,
      NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT,
      null
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.COMMENT_NODE) {
        const text = (node as Comment).textContent?.trim() || '';
        if (text.startsWith('setya:')) {
          this.markerScanResults.push({
            type: 'Comment Marker',
            element: `<!-- ${text} -->`,
          });
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        if (el.tagName.toLowerCase().startsWith('setya-')) {
          this.markerScanResults.push({
            type: 'Custom Element',
            element: `<${el.tagName.toLowerCase()}>`,
          });

          // Activate the counter widget
          if (el.tagName.toLowerCase() === 'setya-counter-widget') {
            el.setAttribute('data-hydrate', 'active');
          }
        }
      }
    }
  }

  // Shadow DOM Methods
  private initShadowDomDemo() {
    const shadowHost = document.getElementById('shadow-host');
    if (!shadowHost || shadowHost.shadowRoot) return;

    const shadow = shadowHost.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        h4 { color: #00d4ff; font-size: 1.1rem; margin: 0 0 10px 0; }
        p { color: #9ca3af; font-size: 0.9rem; margin: 0 0 15px 0; }
        button {
          padding: 8px 16px;
          background: #7c3aed;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover { background: #a78bfa; }
      </style>
      <h4>Styled Heading</h4>
      <p>This text is inside Shadow DOM.</p>
      <button>Shadow Button</button>
    `;
  }

  toggleGlobalStyle() {
    if (this.globalStyleActive) {
      this.globalStyleElement?.remove();
      this.globalStyleElement = null;
    } else {
      this.globalStyleElement = document.createElement('style');
      this.globalStyleElement.textContent = `
        h4 { color: red !important; }
        .scoped-heading { color: red !important; }
      `;
      document.head.appendChild(this.globalStyleElement);
    }
    this.globalStyleActive = !this.globalStyleActive;
  }

  // Partial Hydration Methods
  private initPartialHydrationObserver() {
    const lazyComponent = document.querySelector('.hydration-component.lazy');
    if (!lazyComponent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.belowFoldHydrated) {
            this.belowFoldHydrated = true;
            this.logHydration('Below Fold component hydrated (on scroll)');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(lazyComponent);
  }

  incrementAboveFold() {
    if (this.aboveFoldHydrated) {
      this.aboveFoldCounter++;
    }
  }

  incrementBelowFold() {
    if (this.belowFoldHydrated) {
      this.belowFoldCounter++;
    }
  }

  private logHydration(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    this.hydrationLog.push({ time, message });
  }
}
