import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/89626-order-delivery.json'
  };
  options1: AnimationOptions = {
    path: '/assets/lottie/59161-self-storage-contener.json'

  }; options2: AnimationOptions = {
    path: '/assets/lottie/108310-robo-packaging-machine.json'
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onAnimate(animationItem: AnimationItem): void {
  }

  getstarted(){
this.router.navigate(['auth/signup'])
  }

}
