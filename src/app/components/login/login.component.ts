import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    loginForm?: any;
    constructor(public layoutService: LayoutService, private fb: FormBuilder, private authService : AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
      }

    onSubmit(): void {
        if (this.loginForm.valid) {
          const username = this.loginForm.get('username').value;
          const password = this.loginForm.get('password').value;
    
           // Call the authentication service's login method
           if (this.authService.login(username, password)) {
            // Navigate to the ProductListComponent upon successful login
            this.router.navigate(['/customer']);
          } else {
            // Handle authentication error (show error message, etc.)
          }
    
        }
      }
}
