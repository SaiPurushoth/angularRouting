import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthguardServiceService } from './authguard-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthguardServiceService){

  }
  canActivate():boolean
  {
    if(this.Authguardservice.getToken())
    {
      alert("you are user");
      return true;
    }
    else{
      alert('not a valid');
      return false;
    }
  } 
  
  
}
