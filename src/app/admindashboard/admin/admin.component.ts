import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { getParcels, ParcelState } from '../Redux/Reducers/ParcelReducers';
import { Store } from '@ngrx/store';
import * as Actions from '../Redux/Actions/ParcelActions'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private router:Router,private route:ActivatedRoute, private service:ParcelsService, private store: Store<ParcelState>) { }
  parcels$=this.store.select(getParcels)
  filter=''
  p:number=1
  ngOnInit(): void {
    this.showall()
  }
  onview(id:number=0){
    this.store.dispatch(Actions.ParcelId({id}))
    this.router.navigate([`/admin/admindetails/${id}`])
  }
  onAll(){
    this.router.navigate(['admin'])
  }
  onCreate(){
    this.router.navigate(['admin/addnew'])
  }
  showall(){
    this.store.dispatch(Actions.LoadParcels())
  }
onDelete(id:number=0){
  this.store.dispatch(Actions.DeleteParcel({id}))
  this.store.dispatch(Actions.LoadParcels())
}


}
