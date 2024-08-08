import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() details: {
    value?: String
    type?: String
    width?: String
  } = {};
  
  getClass() {
    return this.details.type === 'primary' 
      ? `btn-primary ${this.details.width} text-white` 
      : `btn-secondary ${this.details.width} text-secondary`;
  }
  
}
