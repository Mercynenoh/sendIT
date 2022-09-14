import { Component, HostListener, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/Services/parcels.service';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  constructor(private service: ParcelsService) {}
id!:number

  markerPositions: google.maps.LatLngLiteral[] = [

  ];

  ngOnInit(): void {
  this.showmap(this.id)


  }
  showmap(id:number){
    this.service.getParcelDetails(id).subscribe((res) => {
      const coordinates = res.map((parcel) => ({
        lat: parcel.lat,  
        lng: parcel.lng,
      }));

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
