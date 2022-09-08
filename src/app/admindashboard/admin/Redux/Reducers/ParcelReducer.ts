
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { parcel } from "src/app/Interfaces/parces";
import * as Actions from "../Actions/parcelAction"


export interface ParcelState{
  parcels:parcel[]
  ParcelsError:string
  error:string
  deleteMessage:string
}
const initialState:ParcelState={
  parcels:[],
  ParcelsError:'',
  error:'',
  deleteMessage:''
}
const getParcelFeatureState = createFeatureSelector<ParcelState>('parcels')

export const getParcels= createSelector(
  getParcelFeatureState,
  state=>state.parcels
)
export const ParcelReducer = createReducer(
  initialState,
  on(Actions.LoadParcelsSuccess, (state,action):ParcelState=>{
      return{...state, parcels:action.Parcels}
  }),on(Actions.LoadParcelsFailure, (state,action):ParcelState=>{
      return{...state, ParcelsError:action.error}
  })
)


