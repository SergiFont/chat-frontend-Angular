import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';


@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb          = inject ( FormBuilder )
  private authService = inject( AuthService )
  private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email:    ['user0@example.com', [ Validators.required, Validators.email ]],
    password: ['MyPassword12345', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
  })

  login() {
    const { email, password } = this.myForm.value

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl(''),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }

}
