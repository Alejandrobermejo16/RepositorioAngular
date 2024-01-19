import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';  //importamos el reducer

export interface State {

}

export const reducers: ActionReducerMap<State> = {

  counter: counterReducer, //aqui va la prop que se va a modificar y el reducer del que coge la modificacion
  

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
