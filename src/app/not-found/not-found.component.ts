import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
     trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('600ms ease-in')),
    ])
  ]
})
export class NotFoundComponent implements OnInit {

  load=false
  constructor() { }

  ngOnInit(): void {
  }
  state: string = 'default';
  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  @HostListener('window:load')
  onLoad() {
  this.rotate()
  }
}
