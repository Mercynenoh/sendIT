import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  display:any
  center: google.maps.LatLngLiteral = {
    lat: -0.42013,
    lng: 36.94759
};
zoom = 4;
moveMap(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.display = event.latLng.toJSON();
}
markerOptions: google.maps.MarkerOptions = {
    draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [
  {
    lat: -0.42013,
    lng: 36.94759
  },
  {
    lat: 1.292066,
    lng: 36.821946
  }
];

@HostListener('window:load')
  onLoad() {


    }
  }
