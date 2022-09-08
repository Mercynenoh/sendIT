import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { ParcelsService } from 'src/app/Services/parcels.service';
import * as ParcelsActions from '../Actions/parcelAction'


@Injectable({
  providedIn: 'root'
})
export class ParcelEffectsService {

  constructor(private actions:Actions, private service:ParcelsService) { }

  loadParcel= createEffect(()=>{
    return this.actions.pipe(
      ofType(ParcelsActions.LoadParcels),
      mergeMap(()=> this.service.showParcel().pipe(
        map(res=>ParcelsActions.LoadParcelsSuccess({Parcels:res})),
        catchError(error=>of(ParcelsActions.LoadParcelsFailure({error:error.message})))
      ))
    )
  })
}
