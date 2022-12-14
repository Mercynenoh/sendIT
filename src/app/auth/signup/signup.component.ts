import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  addForms!: FormGroup;
  regSuccess = true;
  error = 'Empty Fields!!!';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.addForms = this.fb.group({
      Firstname: [null, [Validators.required]],
      Lastname: [null, [Validators.required]],
      Senderemail: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, this.checkPassword]],
    });
  }

  checkPassword(control: FormControl) {
    const value = control.value;
    const special = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value);
    return !special ? { special: true } : null;
  }
  onlogin() {
    this.router.navigate(['auth/login']);
  }
  errResponse!: string;
  addUser() {
    if (this.addForms.valid) {
      this.auth.registerUser(this.addForms.value).subscribe({
        next: (response) => {
          console.log(response);

          this.regSuccess = true;
          if (this.regSuccess) {
            this.router.navigate(['auth/login']);
          }
        },
        error: (error) => {
          console.log(error.error.message);
          this.errResponse=error.error.message
          this.regSuccess = false;
        },
      });
    }
  }
  onClose() {
    this.regSuccess = true;
  }
}
