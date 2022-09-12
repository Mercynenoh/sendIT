import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcel, ParcelState } from 'src/app/admindashboard/Redux/Reducers/ParcelReducers';
import * as Actions from '../../admindashboard/Redux/Actions/ParcelActions'

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  id!:number
  constructor(private router:Router,private route:ActivatedRoute,private store :Store<ParcelState> ) { }
  parcel$=this.store.select(getParcel)
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id=+param['id']
    })
    this.store.dispatch(Actions.ParcelId({id:this.id}))
  }

goback(){
this.router.navigate(['user'])
}

}
