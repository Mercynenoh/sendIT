import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { getParcels, ParcelState } from '../Redux/Reducers/ParcelReducers';
import * as Actions from '../Redux/Actions/ParcelActions'
import { Observable, timeout } from 'rxjs';
import { Userr } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-newparcel',
  templateUrl: './newparcel.component.html',
  styleUrls: ['./newparcel.component.css']
})
export class NewparcelComponent implements OnInit {
  regSuccess=true
  error="Inputs Required"
  constructor(private router:Router, private fb:FormBuilder, private service:AuthService,private parcel:ParcelsService, private store:Store<ParcelState>) { }
  addForm!: FormGroup;
  user$:Observable<Userr[]>=new Observable()
  parcel$:Observable<parcel[]>=new Observable()
  ngOnInit(): void {
    this.onget()
    this.onParcel()
    this.getLocation()
    this.addForm = this.fb.group({
      Adress: [null,[Validators.required]],
      Senderemail:[null,[Validators.required, Validators.email]],
      RecepientEmail:[null,[Validators.required, Validators.email]],
      parcelname: [null,[Validators.required]],
      weight: [null,[Validators.required]],
      Date: [null,[Validators.required]],
      lat: [null,[Validators.required]],
      lng: [null,[Validators.required]],
      TruckNo: [null,[Validators.required]],
      TrackingNo: [null,[Validators.required]],
      Price: [null,[Validators.required]],

    });
    this.addForm.get('weight')!.valueChanges.subscribe(res=>{

      this.addForm.get('Price')!.setValue(res*23)
    });
  }
  callApi(Longitude:number, Latitude:number){

    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}%lat=${Latitude}`

  }
  getLocation(){

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(longitude,latitude)
        this.addForm.get('lat')?.setValue(latitude)
        this.addForm.get('lng')?.setValue(longitude)
        this.callApi(longitude, latitude);
      });

    }else{

      console.log('no support for geolocation')

    }

  }


  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null
  }
onsubmit(){
this.router.navigate(['admin'])
}
onClose(){
  this.regSuccess=true
  }
addnewParcel(){


  const newProduct:parcel={...this.addForm.value}
  this.store.dispatch(Actions.addParcel({newProduct}))
  this.store.dispatch(Actions.LoadParcels())
  this.router.navigate(['admin'])
   console.log();
   if(this.addForm.valid){
  }else{
    this.regSuccess=false
  }
    this.regSuccess=true
}
onget(){
  this.user$= this.service.showUsers()
 }
 onParcel(){
  this.parcel$=this.parcel.showParcel()
 }
}

