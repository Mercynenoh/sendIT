
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { parcel } from "src/app/Interfaces/parces";
import * as Actions from "../Actions/ParcelActions"


export interface ParcelState{
  parcels:parcel[]
  ParcelsError:string
  error:string
  deleteMessage:string
  addMessage:string
  parcelsid:number
}
const initialState:ParcelState={
  parcels:[],
  ParcelsError:'',
  error:'',
  deleteMessage:'',
  addMessage:'',
  parcelsid:0


}
const getParcelFeatureState = createFeatureSelector<ParcelState>('parcels')
export const getParcels= createSelector(
  getParcelFeatureState,
  state=>state.parcels
)
export const getParcelid=createSelector(
  getParcelFeatureState,
  state=>state.parcelsid
)

export const getParcel=createSelector(
  getParcelFeatureState,
  getParcelid,
  (state,id)=>state.parcels.find(parcel=>parcel.id===id)

)
export const ParcelReducer = createReducer(
  initialState,
  on(Actions.LoadParcelsSuccess, (state,action):ParcelState=>{
      return{...state, parcels:action.Parcels}
  }),on(Actions.LoadParcelsFailure, (state,action):ParcelState=>{
      return{...state, ParcelsError:action.error}

  }),on(Actions.addParcelSuccess,(state,action):ParcelState=>{
    return{...state, addMessage:action.addMessage}
}),
on(Actions.addParcelFailure,(state,action):ParcelState=>{
  return{...state, error:action.error}
}),
on(Actions.DeleteParcelSuccess, (state, action): ParcelState => {
  return { ...state, deleteMessage: action.deletemessage };
}),
on(Actions.DeleteParcelFailure, (state, action): ParcelState => {
  return { ...state, error: action.error };
}),
on(Actions.ParcelId, (state, action): ParcelState => {
  return { ...state, parcelsid:action.id };
})
)


