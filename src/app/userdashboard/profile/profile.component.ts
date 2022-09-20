import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userr } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';
import { image, ImageService } from 'src/app/Services/image.service';

class ImageSnippet {
  constructor(public Profile:Userr, public file: File) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  addForms!:FormGroup
  percentDone!: number;
  uploadSuccess!: boolean;
  profile:Userr[]=[]

  ngOnInit(): void {
    this.addForms = this.fb.group({
      image:[null],
    });
  }
  selectedFile!: ImageSnippet;

  constructor(private imageService: ImageService,private fb:FormBuilder,private service:AuthService){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.addimage(this.addForms.value.image).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
  onadd(id:number){
 this.imageService.addimage(id).subscribe(res=>{
  console.log(this.addForms.value);

 })
  }
  getProfiles(id:number){
   this.imageService.seeimage(id).subscribe(res=>{
    this.profile=res
   })
  }
}
