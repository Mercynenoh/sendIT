import { ThisReceiver } from '@angular/compiler';
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
  constructor( private router:Router, private service:AuthService) {
    localStorage.setItem("email","mercy@gmail.com");
    localStorage.setItem("password","admin12!");
   }

  ngOnInit(): void {
  }
onsignup(){
  this.router.navigate(['auth/signup'])
}
onSubmit() {
  if(this.form.value.email!==''&& this.form.value.password!==''){
    let token =  localStorage.setItem("token","6o5nuVTiNpVVUkiFG=44tb9PplT0JHtvDAJOKwMhKZ2zR/uazkL29VaXi4Nn1mxZ5L4ZU6qVkxoGTVLi7PYdtoss");
    console.log(token);
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if(this.form.value.email===email && this.form.value.password===password){
      this.router.navigate(['admin'])
    }else{
      this.router.navigate(['user'])
    }

  }else{
    this.logged=true
  }
}
}
