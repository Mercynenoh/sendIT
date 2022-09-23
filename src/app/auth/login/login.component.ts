import { ThisReceiver, Token } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!:NgForm
  logged=true
  error!:string
  constructor( private router:Router, private service:AuthService) {
   }

  ngOnInit(): void {
  }
onsignup(){
  this.router.navigate(['auth/signup'])
}
onSubmit() {
  if(this.form.valid){
    this.service.loginUser(this.form.value).subscribe({next:
      (response)=>{
      localStorage.setItem('token', response.token)
      localStorage.setItem('Senderemail', response.user.Senderemail)
      localStorage.setItem('role', response.user.role)
    let role = localStorage.getItem('role')
      if(role==='admin'){
      this.router.navigate(['admin'])
      }else{
        this.router.navigate(['user'])
      }
    },
    error: (error) => {
        console.log(error.error.message);
        this.error=error.error.message
        this.logged = false;
      },
    })
  }
}
 onClose(){
this.logged=true
}
}
// next: (response) => {
//   console.log(response);

//   this.regSuccess = true;
//   if (this.regSuccess) {
//     this.router.navigate(['auth/login']);
//   }
// },
// error: (error) => {
//   console.log(error.error.message);
//   this.errResponse=error.error.message
//   this.regSuccess = false;
// },
