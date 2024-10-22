import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InputComponent,ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
  public loginInput = {
    placeholder: 'Enter Email',
    border:'dark',
  };
  public emailButton = {
    value: 'Subscribe',
    type: 'secondary',
    width: 'w-100',
  };
}
