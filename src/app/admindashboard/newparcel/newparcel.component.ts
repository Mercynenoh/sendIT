import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newparcel',
  templateUrl: './newparcel.component.html',
  styleUrls: ['./newparcel.component.css']
})
export class NewparcelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onsubmit(){
this.router.navigate(['admin'])
}
}
