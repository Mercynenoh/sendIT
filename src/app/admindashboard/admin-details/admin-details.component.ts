import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import * as Actions from '../Redux/Actions/ParcelActions'
import { getParcel, getParcels, ParcelState } from '../Redux/Reducers/ParcelReducers';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor( private router:Router,private route:ActivatedRoute, private service:ParcelsService,private store :Store<ParcelState> ) { }
  id!:number
  error="Parcel Updated as delivered"
  parceldelivered=false
  parcel$=this.store.select(getParcel)
  ngOnInit(): void {
    this.parcel$
    this.store.select(getParcels)
    this.route.params.subscribe((param)=>{
      this.id=+param['id']
    })
    this.store.dispatch(Actions.ParcelId({id:this.id}))
  }
goback(){
this.router.navigate(['admin'])
}

delivered(id:number){
  this.service.updateDelivered(id).subscribe(res=>{
    this.parceldelivered=false
    this.router.navigate(['admin'])

  })
}
onClose(){
  this.parceldelivered=true
}



}
