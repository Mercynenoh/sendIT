import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { getParcel, getParcels, ParcelState } from '../../admindashboard/Redux/Reducers/ParcelReducers';
import { Store } from '@ngrx/store';
import * as Actions from '../../admindashboard/Redux/Actions/ParcelActions'
import { Quotes, Weight } from 'src/app/Interfaces/Quotes';
import { QuotesService } from 'src/app/Services/quotes.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  parcel$=this.store.select(getParcels)
  newquote:Quotes[]=[]
  p:number=0
  constructor( private router:Router,private store: Store<ParcelState>, private route:ActivatedRoute, private quotesService:QuotesService, private service:ParcelsService) { }

  ngOnInit(): void {
    const email = localStorage.getItem("email")?? ""
    this.showall()



  }
onview(id:number=0){
  this.store.dispatch(Actions.ParcelId({id}))
  this.router.navigate([`/user/view/${id}`], {relativeTo:this.route})
  console.log(id);
}
onOne(){
  this.newquote= this.quotesService.getQuotes().filter(v=> v.weight===Weight.One)
}
onTwo(){
  this.newquote= this.quotesService.getQuotes().filter(v=> v.weight==Weight.Two)
}
onThree(){
  this.newquote= this.quotesService.getQuotes().filter(v=> v.weight==Weight.Three)
}
onFour(){
  this.newquote= this.quotesService.getQuotes().filter(v=> v.weight==Weight.Four)
}
showall(){
  this.store.dispatch(Actions.LoadParcels())
}


}
