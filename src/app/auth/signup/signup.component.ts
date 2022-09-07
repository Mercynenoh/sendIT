import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addForms!: FormGroup;
  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addForms = this.fb.group({
      first:[null,[Validators.required]],
      last:[null,[Validators.required]],
      email: [null,[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]+@$'),]],
      password: [null,[Validators.required,this.checkPassword]],
    });
  }


  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null
  }
  onlogin(){
  this.router.navigate(['login'])
}
  }


