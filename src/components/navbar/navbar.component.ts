import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
}
