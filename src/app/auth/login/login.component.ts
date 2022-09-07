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
  constructor( private router:Router, private service:AuthService) {
    localStorage.setItem("email","mercy@gmail.com");
    localStorage.setItem("password","admin12!");
   }

  ngOnInit(): void {
  }
onsignup(){
  this.router.navigate(['signup'])
}
onSubmit() {
  if(this.form.valid){
    let token =  localStorage.setItem("token","6o5nuVTiNpVVUkiFG=44tb9PplT0JHtvDAJOKwMhKZ2zR/uazkL29VaXi4Nn1mxZ5L4ZU6qVkxoGTVLi7PYdtoss");
    console.log(token);
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if(email==='mercy@gmail.com'){
    this.router.navigate(['admin'])
    }if(email!=='mercy@gmail.com'){
      this.router.navigate(['user'])
    }
    else{

    }
  // this.service.loginUser(this.form.value).subscribe(response=>{
  // }

  }
}
}
