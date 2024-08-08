import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/input/input.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginInput = [
    {
      placeholder: 'Enter Email',
    },
    { placeholder: 'Enter Password' },
  ];
  loginButton = {
    value: 'Login',
    type: 'primary',
    width: 'w-100',
  };

  isSignUp = false;
  accountText = "Don't have an account?";
  toggleText = "Sign Up";



  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
    if (this.isSignUp) {
      this.accountText = "Already have an account?";
      this.toggleText = "Log In";
      this.loginButton.value = 'Register';
      this.loginInput.unshift({ placeholder: 'Enter Full Name' });
     } else {
      this.accountText = "Don't have an account?";
      this.toggleText = "Sign Up";
      this.loginButton.value = 'Login';
      this.loginInput.splice(0, 1);
    }
  }
  

}
