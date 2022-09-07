import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private router:Router, private service:ParcelsService) { }
  parcels:parcel[]=[]
  ngOnInit(): void {
    this.showall()
  }
  onview(){
    this.router.navigate(['admin/admindetails'])
  }
  onAll(){
    this.router.navigate(['admin'])
  }
  onCreate(){
    this.router.navigate(['admin/addnew'])
  }
  showall(){
   this.service.showParcel().subscribe(data=>{
    this.parcels=data
    console.log(data);

   })
  }
}
