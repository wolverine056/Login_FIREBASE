import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from '@firebase/util';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user$
  constructor(private angfireauth:AngularFireAuth,private route:Router) {
    this.user$=angfireauth.authState;
   }

  register(email:string ,password:string){
    this.angfireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("Registeration Successfully done");
      
      this.route.navigate(['/login']);
    },Error=>{
        alert(Error.message);
        this.route.navigate(['/register']);
    })
  }
  login(email:string ,password:string){
    this.angfireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.route.navigate(['dashboard']);
    }, err =>{
      alert(err.message);
      this.route.navigate(['/login']);
    })
  }
  logout(){
    this.angfireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.route.navigate(['/login'])
    },
    err=>{
      alert(err.message);
      
    })
  }
  islogedin(){
    return localStorage.getItem('token'); 
  }
}
