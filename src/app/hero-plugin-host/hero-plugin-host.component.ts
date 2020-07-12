import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

declare var heroPlugins: string[];

/** Serves all declared plugins */
@Component({
  selector: 'app-hero-plugin-host',
  template: ``,
  styleUrls: ['./hero-plugin-host.component.css']
})
export class HeroPluginHostComponent implements OnChanges {
  @Input() hero: Hero;

  constructor(
    private elRef: ElementRef<HTMLElement>
  ) { }

  public ngOnChanges(_changes: SimpleChanges): void {
    this.removePlugins();
    this.addPlugins();
  }

  private removePlugins(): void {
    const hostElement = this.elRef.nativeElement;
    let child = hostElement.lastElementChild;
    while (!!child) {
      hostElement.removeChild(child);
      child = hostElement.lastElementChild;
    }
  }

  private addPlugins(): void {
    const hostElement = this.elRef.nativeElement;

    for (const elementName of heroPlugins) {
      const exists = customElements.get(elementName);
      if (!exists) {
        console.warn(`Custom element ${elementName} does not exist`);
        continue;
      }

      const customElement = document.createElement(elementName);
      customElement.setAttribute('data-hero-name', this.hero.name);

      // append to element
      hostElement.appendChild(customElement);
    }
  }

  // <hero-universe-indicator [attr.data-hero-name]="hero.name"></hero-universe-indicator>
}
