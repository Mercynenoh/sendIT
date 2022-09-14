import { Pipe, PipeTransform } from '@angular/core';
import { parcel } from 'src/app/Interfaces/parces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:parcel[], Tracking:string): parcel[] {
    if(value.length===0 || Tracking===''){
      // name = name.toLowerCase();
      return value
    }
    const student:parcel[]=[]
    for (let students of value){
   if (students.TrackingNo.toString().indexOf(Tracking)!=-1){
    student.push(students)
   }
  }
  return student
}

}
