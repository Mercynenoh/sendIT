import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { ParcelsService } from 'src/app/Services/parcels.service';
import * as ParcelsActions from '../Actions/ParcelActions'


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
  createParcel =createEffect(()=>{
    return this.actions.pipe(
      ofType(ParcelsActions.addParcel),
      mergeMap(action=> this.service.addParcel(action.newProduct).pipe(
        map(res=>ParcelsActions.addParcelSuccess({addMessage:res.parcelname})),
        catchError(error=>of(ParcelsActions.addParcelFailure({error:error.message})))
      ))
    )
  })
  deleteParcel= createEffect(()=>{
    return this.actions.pipe(
      ofType(ParcelsActions.DeleteParcel),
      mergeMap(action=> this.service.deleteParcel(action.id).pipe(
        map(res=>ParcelsActions.DeleteParcelSuccess({deletemessage:res.message})),
        catchError(error=>of(ParcelsActions.DeleteParcelFailure({error:error.message})))
      ))

    )
  })

}
