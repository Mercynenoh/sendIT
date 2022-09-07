import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParcelsService } from 'src/app/Services/parcels.service';

@Component({
  selector: 'app-newparcel',
  templateUrl: './newparcel.component.html',
  styleUrls: ['./newparcel.component.css']
})
export class NewparcelComponent implements OnInit {
  regSuccess=true
  constructor(private router:Router, private fb:FormBuilder, private service:ParcelsService) { }
  addForm!: FormGroup;
  ngOnInit(): void {
    this.addForm = this.fb.group({
      Adress: [null,[Validators.required]],
      Senderemail:[null,[Validators.required]],
      Receipientemail:[null,[Validators.required]],
      Parcelname: [null,[Validators.required]],
      Weight: [null,[Validators.required]],
      Status: [null,[Validators.required]],
      Date: [null,[Validators.required]],
      TruckNo: [null,[Validators.required]],
      Tracking: [null,[Validators.required]],

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
    this.service.addParcel(this.addForm.value).subscribe(response=>{
      this.regSuccess = true
      console.log(response);

      if (this.regSuccess){
       this.router.navigate(['admin'])
      }
    })
  }else{
    this.regSuccess=false
  }
}
}
