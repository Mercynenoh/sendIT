import { Component, HostListener, OnInit } from '@angular/core';
import * as Actions from '../../admindashboard/Redux/Actions/ParcelActions'
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { getParcels, ParcelState } from 'src/app/admindashboard/Redux/Reducers/ParcelReducers';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  constructor(private service: ParcelsService,private store: Store<ParcelState>, private  route:ActivatedRoute) {}
  parcels$=this.store.select(getParcels)
id!:number

  markerPositions: google.maps.LatLngLiteral[] = [

  ];

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id=+param['id']
    })
    this.store.dispatch(Actions.ParcelId({id:this.id}))
this.showmap()
  }
  showmap(){
    this.store.select(getParcels).subscribe(res=>{
        let parcel = res.filter(parcel=>parcel.id==this.id)
      const coordinates = parcel.map((parcel) => ({
        lat: parcel.lat,
        lng: parcel.lng,
      }));
console.log(coordinates);

      this.markerPositions =  coordinates.concat([
        {
          lat: -4.043740,
          lng: 39.658871,
        }
      ]);
    });
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -0.42013,
    lng: 36.94759,
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  @HostListener('window:load')
  onLoad() {}
}
