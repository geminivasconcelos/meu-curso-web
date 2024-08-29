import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDefaultComponent } from '../../components/button-default/button-default.component';
import { ButtonDefaulWhiteComponent } from '../../components/button-defaul-white/button-defaul-white.component';
import { ButtonModule } from 'primeng/button';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonDefaultComponent,
    ButtonDefaulWhiteComponent,
    ButtonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private router: Router) {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.router.navigate(['/dashboard']);
  }

  navigate() {
    this.router.navigate(['/register']);
  }
}
