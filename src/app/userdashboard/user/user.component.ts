import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelsService } from 'src/app/Services/parcels.service';
import {
  getParcel,
  getParcels,
  ParcelState,
} from '../../admindashboard/Redux/Reducers/ParcelReducers';
import { Store } from '@ngrx/store';
import * as Actions from '../../admindashboard/Redux/Actions/ParcelActions';
import { Quotes, Weight } from 'src/app/Interfaces/Quotes';
import { QuotesService } from 'src/app/Services/quotes.service';
import { map } from 'rxjs';
import { NotificationService } from 'src/app/Services/notification.service';
import { Notify } from 'src/app/Interfaces/notification';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  parcel$ = this.store.select(getParcels);
  parcel2$ = this.store.select(getParcels);
  newquote: Quotes[] = [];
  notification:Notify[]=[]
  
  p: number = 0;
  constructor(
    private router: Router,
    private store: Store<ParcelState>,
    private route: ActivatedRoute,
    private quotesService: QuotesService,
    private service: ParcelsService,
    private notify:NotificationService
  ) {}

  ngOnInit(): void {
    this.allnotifications()
    this.showall();
    this.showmyParcels();
    this.store.select(getParcels)
  }
  onview(id: number = 0) {
    this.store.dispatch(Actions.ParcelId({ id }));
    this.router.navigate([`/user/view/${id}`], { relativeTo: this.route });
    console.log(id);
  }

  showall() {
    this.store.dispatch(Actions.LoadParcels());
  }
  showmyParcels() {
    this.parcel$ = this.parcel2$.pipe(
      map(res => {
        let myparcel = res.filter(
          (el) => el.RecepientEmail == localStorage.getItem('Senderemail')
        );
        return myparcel;
      })
    );
    return this.parcel$;
  }


  allnotifications(){
this.notify.getall().subscribe(res=>{
this.notification=res
})
  }
  onNotify(){
    this.notify.getall().subscribe(res=>{
      })
  }

  removenotification(id:number){
    this.notify.deleteNotification(id).subscribe(res=>{
      this.onNotify()
    })

  }
}
