import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
  }
  onsignup(){
this.router.navigate(['auth/signup'])
  }
  onlogin(){
    this.router.navigate(['auth/login'])
  }
  onlogout(){
    localStorage.clear()
    this.router.navigate([''])
  }
  onhome(){
    this.router.navigate([''])
  }

}
