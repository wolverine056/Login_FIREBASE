import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authser:AuthserviceService, private route:Router){}
  canActivate() {
   
    if(this.authser.islogedin){
      return true;
    }
      this.route.navigate(['dasboard']);
      alert('you are not authorised to dashboard');
      return false;
  }
  
}
