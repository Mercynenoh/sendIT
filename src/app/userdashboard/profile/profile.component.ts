import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/Services/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
export interface image{
  image:string
  Bio:string
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
  profile:image[]=[]

  ngOnInit(): void {
    this.addForms = this.fb.group({
      image:[null],
      Bio:[null],
    });
    this.getProfiles()
  }
  selectedFile!: ImageSnippet;

  constructor(private imageService: ImageService,private fb:FormBuilder){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.addImage(this.addForms.value.image).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
  onadd(){
 this.imageService.addImage(this.addForms.value).subscribe(res=>{
  console.log(this.addForms.value);

 })
  }
  getProfiles(){
    this.imageService.seeimage().subscribe(res=>{
      this.profile=res
      console.log(res);

    })
  }
}
