import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() details: {
    value?: String
    type?: String
    width?: String,
    radius?:boolean
  } = {};
  
  getClass() {
    return this.details.type === 'primary' 
      ? `btn-primary ${this.details.width} text-white` 
      : `btn-secondary ${this.details.width} text-white`;

  }
  
}
