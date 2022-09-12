import { createAction, props } from "@ngrx/store";
import {  parcel } from "src/app/Interfaces/parces";

export const ParcelId= createAction('ParcelId', props<{id:number}>())


export const LoadParcels = createAction('LoadParcel')

export const LoadParcelsSuccess = createAction('LoadParcelSuccess',
props<{Parcels:parcel[]}>())

export const LoadParcelsFailure = createAction('LoadParcel',
props<{error:string}>())


export const addParcel= createAction('addParcel',
props<{newProduct:parcel}>()
)
export const addParcelSuccess= createAction('addParcelSuccess',
props<{addMessage:string}>()
)
export const addParcelFailure= createAction('addParcelFailure',
props<{error:string}>()
)


export const DeleteParcel= createAction('DeleteParcel',
props<{id:number}>()
)
export const DeleteParcelSuccess= createAction('DeleteParcelSuccess',
props<{deletemessage:string}>()
)
export const DeleteParcelFailure= createAction('DeleteParcelFailure',
props<{error:string}>()
)




