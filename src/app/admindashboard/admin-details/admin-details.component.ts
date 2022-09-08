import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import * as Actions from '../admin/Redux/Actions/parcelAction'
import { getParcels, ParcelState } from '../admin/Redux/Reducers/ParcelReducer';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor( private router:Router, private service:ParcelsService,private store :Store<ParcelState> ) { }

  parcel$=this.store.select(getParcels)
  ngOnInit(): void {
    this.showall()
  }
goback(){
this.router.navigate(['admin'])
}
showall(){
  this.store.dispatch(Actions.LoadParcels())

}
}
