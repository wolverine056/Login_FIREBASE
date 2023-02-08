import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  
}
