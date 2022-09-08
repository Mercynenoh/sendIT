import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { getParcels, ParcelState } from './Redux/Reducers/ParcelReducer';
import { Store } from '@ngrx/store';
import * as Actions from '././Redux/Actions/parcelAction'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private router:Router, private service:ParcelsService, private store: Store<ParcelState>) { }
  parcels$=this.store.select(getParcels)
  filter=''
  ngOnInit(): void {
    this.showall()
  }
  onview(id:number=0){
    this.router.navigate(['admin/admindetails'])
  }
  onAll(){
    this.router.navigate(['admin'])
  }
  onCreate(){
    this.router.navigate(['admin/addnew'])
  }
  showall(){
    this.store.dispatch(Actions.LoadParcels())
    // this.service.showParcel().subscribe(result=>{
    //   this.parcels=result

    // }) 
  }
}
