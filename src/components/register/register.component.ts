import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string ='';
  password :string =';'
  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  Register(){
    if (this.email==''){
      alert('please enter email');
      return;
    }
    if (this.password==''){
      alert('please enter password');
      return;
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
  }
  
}