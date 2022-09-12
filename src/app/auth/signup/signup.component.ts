import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addForms!: FormGroup;
  regSuccess =true
  constructor(private router:Router, private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.addForms = this.fb.group({
      first:[null,[Validators.required]],
      last:[null,[Validators.required]],
      email: [null,[Validators.required]],
      password: [null,[Validators.required,this.checkPassword]],
    });
  }


  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null
  }
  onlogin(){
  this.router.navigate(['auth/login'])
}
addUser() {
  if(this.addForms.valid){
  this.auth.registerUser(this.addForms.value).subscribe(response=>{
    this.regSuccess = true
    console.log(response);

    if (this.regSuccess){
     this.router.navigate(['auth/login'])
    }
  })
}else{
  this.regSuccess=false
}
  }

}
