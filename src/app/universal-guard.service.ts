import { Injectable } from '@angular/core';
import { Route, CanActivate, CanDeactivate, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot } from '../../node_modules/@angular/router';
import { ReqBloodComponent } from './req-blood/req-blood.component';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuardService implements CanActivate, CanDeactivate<{}>{


  constructor() { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    const isValidUser= sessionStorage.getItem('isUserLogin');
    if(isValidUser === 'true') return true;
    else
        return false;
  }
  canDeactivate(component:ReqBloodComponent,current:ActivatedRouteSnapshot,curState:RouterStateSnapshot, 
    nextState:RouterStateSnapshot):boolean{
      return window.confirm('Are you sure want to move out?');
  }

}
