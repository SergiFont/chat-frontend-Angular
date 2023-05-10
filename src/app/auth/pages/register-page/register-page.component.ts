import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb          = inject( FormBuilder )
  private authService = inject( AuthService )
  private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email:    ['sergi@mail.com', [ Validators.required, Validators.email ]],
    username: ['SergiFont', [ Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^\S*$/) ]],
    password: ['Mypassword123', [ Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) ]]
  })

  register() {
    const { email, password, username } = this.myForm.value

    this.authService.register(email, username, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }

}
