import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon[icon]',
  standalone: true,
  imports: [],
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: ['']
})
export class SvgIconComponent {
  @Input() icon = ''

  get href() {
    return `assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
