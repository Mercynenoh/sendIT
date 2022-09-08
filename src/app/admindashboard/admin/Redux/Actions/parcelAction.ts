import { createAction, props } from "@ngrx/store";
import { parcel } from "src/app/Interfaces/parces";



export const LoadParcels = createAction('LoadParcel')

export const LoadParcelsSuccess = createAction('LoadParcelSuccess',
props<{Parcels:parcel[]}>())

export const LoadParcelsFailure = createAction('LoadParcel',
props<{error:string}>())

