import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { parcel } from 'src/app/Interfaces/parces';
import { ParcelsService } from 'src/app/Services/parcels.service';
import { getParcel, getParcels, ParcelState } from '../Redux/Reducers/ParcelReducers';
import * as Actions from '../Redux/Actions/ParcelActions'
import { first, Observable, timeout } from 'rxjs';
import { Userr } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-newparcel',
  templateUrl: './newparcel.component.html',
  styleUrls: ['./newparcel.component.css']
})
export class NewparcelComponent implements OnInit {
  regSuccess=true
  error="Inputs Required"
  address: string = '';
  Receiverlatitude: number=0;
  Receiverlongitude: number=0;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  handleAddressChange(address: any) {
    this.address = address.formatted_address;
    this.Receiverlatitude = address.geometry.location.lat();
    this.Receiverlongitude = address.geometry.location.lng();

  }

  constructor(private router:Router, private fb:FormBuilder, private route: ActivatedRoute, private service:AuthService,private parcel:ParcelsService, private store:Store<ParcelState>) { }
  addForm!: FormGroup;
  user$:Observable<Userr[]>=new Observable()
  parcel$:Observable<parcel[]>=new Observable()
  parcelone$=this.store.select(getParcel)
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
    this.onget()
    this.onParcel()
    this.store.dispatch(Actions.LoadParcels())
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
      this.addForm.get('Adress')?.setValue(this.address)
      this.addForm.get('lat')?.setValue(this.Receiverlatitude)
      this.addForm.get('lng')?.setValue(this.Receiverlongitude)
    });

    if(!this.isAddMode){
      this.parcel.getParcelDetails(this.id).pipe(first())
      .subscribe(parcel => {
         let editParcel = parcel.find(el=>el)
         console.log(editParcel?.Adress);

        if(editParcel){
          this.addForm.patchValue({
            Senderemail:editParcel.Senderemail,
            RecepientEmail:editParcel.RecepientEmail,
            parcelname: editParcel.parcelname,
            weight: editParcel.weight,
            Date: editParcel.Date,
            lat: editParcel.lat,
            lng: editParcel.lng,
            TruckNo: editParcel.TruckNo,
            TrackingNo:editParcel.TrackingNo,
            Price: editParcel.Price,
            Adress:editParcel.Adress
          })
        }
      })
    }


  }


  // callApi(Longitude:number, Latitude:number){

  //   const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}%lat=${Latitude}`

  // }
  // getLocation(){

  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //       const longitude = position.coords.longitude;
  //       const latitude = position.coords.latitude;
  //       // this.addForm.get('lat')?.setValue(latitude)
  //       // this.addForm.get('lng')?.setValue(longitude)
  //       // this.addForm.get('Adress')?.setValue(this.address)
  //       this.callApi(longitude, latitude);
  //     });

  //   }else{

  //     console.log('no such location')

  //   }

  // }


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
console.log(this.addForm.value);

  const newProduct:parcel={...this.addForm.value}
  this.store.dispatch(Actions.addParcel({newProduct}))

  this.router.navigate(['admin'])

 }
onget(){
  this.user$= this.service.showUsers()
 }
 onParcel(){
  this.parcel$=this.parcel.showParcel()
 }




  updateParcel() {
  this.parcel.updateparcel(this.id,this.addForm.value).subscribe(res=>{
    this.store.dispatch(Actions.LoadParcels())
    this.router.navigate(['admin'])
  })
}

onSubmit() {
  this.submitted = true;

  this.loading = true;
  if (this.isAddMode) {
      this.addnewParcel();
  } else {
      this.updateParcel();
  }
}
}

