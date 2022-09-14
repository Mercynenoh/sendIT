import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { getParcels, ParcelState } from 'src/app/admindashboard/Redux/Reducers/ParcelReducers';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { QuotesService } from 'src/app/Services/quotes.service';
import * as Actions from '../../admindashboard/Redux/Actions/ParcelActions'

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  parcel$=this.store.select(getParcels)
  parcel2$=this.store.select(getParcels)
  p:number=0
  constructor( private router:Router,private store: Store<ParcelState>, private route:ActivatedRoute, private quotesService:QuotesService, private service:ParcelsService) { }

  ngOnInit(): void {
    this.showall()
    this.showmyParcels()



  }
onview(id:number=0){
  this.store.dispatch(Actions.ParcelId({id}))
  this.router.navigate([`/user/view/${id}`], {relativeTo:this.route})
  console.log(id);
}

showall(){
  this.store.dispatch(Actions.LoadParcels())
}
showmyParcels() {
  this.parcel$ = this.parcel2$.pipe(
    map(res => {
      let myparcel = res.filter(
        (el) => el.Senderemail == localStorage.getItem('Senderemail')
      );
      return myparcel;
    })
  );
  return this.parcel$;
}

}
