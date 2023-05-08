import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb = inject( FormBuilder )

  public myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email]],
    username: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(15) ]],
    password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
  })

  register() {
    console.log( this.myForm.value );
  }

}
