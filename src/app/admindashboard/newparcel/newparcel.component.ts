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
  constructor(private router:Router, private fb:FormBuilder, private service:AuthService,private parcel:ParcelsService, private store:Store<ParcelState>) { }
  addForm!: FormGroup;
  user$:Observable<Userr[]>=new Observable()
  parcel$:Observable<parcel[]>=new Observable()
  ngOnInit(): void {
    this.onget()
    this.onParcel()
    this.addForm = this.fb.group({
      Adress: [null,[Validators.required]],
      Senderemail:[null,[Validators.required, Validators.email]],
      Receipientemail:[null,[Validators.required, Validators.email]],
      Parcelname: [null,[Validators.required]],
      Weight: [null,[Validators.required]],
      Status: [null,[Validators.required]],
      Date: [null,[Validators.required]],
      TruckNo: [null,[Validators.required]],
      Tracking: [null,[Validators.required]],
      Price: [null,[Validators.required]],

    });
    this.addForm.get('Weight')!.valueChanges.subscribe(res=>{

      this.addForm.get('Price')!.setValue(res*100)
    });
  }


  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null
  }
onsubmit(){
this.router.navigate(['admin'])
}
addnewParcel(){

if(this.addForm.valid){
  const newProduct:parcel={...this.addForm.value}
  this.store.dispatch(Actions.addParcel({newProduct}))
  this.store.dispatch(Actions.LoadParcels())
  this.router.navigate(['admin'])

  }else{
    this.regSuccess=false
  }
  setTimeout(() => {
    this.regSuccess=true
  }, 3000);
}
onget(){
  this.user$= this.service.showUsers()
 }
 onParcel(){
  this.parcel$=this.parcel.showParcel()
 }
}

