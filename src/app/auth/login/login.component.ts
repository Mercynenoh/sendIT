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
  logged=false
  error='Empty Fields!!!'
  constructor( private router:Router, private service:AuthService) {
   }

  ngOnInit(): void {
  }
onsignup(){
  this.router.navigate(['auth/signup'])
}
onSubmit() {
  if(this.form.valid){
    console.log(this.form.valid);

    this.service.loginUser(this.form.value).subscribe(response=>{
      localStorage.setItem('token', response.token)
      localStorage.setItem('Senderemail', response.user.Senderemail)
      localStorage.setItem('role', response.user.role)
    let role = localStorage.getItem('role')
      if(role==='admin'){
      this.router.navigate(['admin'])
      }else{
        this.router.navigate(['user'])
      }

    })

  }else{
    this.logged=true
  }
}
 onClose(){
this.logged=false
}
}
