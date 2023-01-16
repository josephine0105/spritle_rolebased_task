import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  values: any;
  answer:any
  constructor(public _service: ServiceService) {}

  ngOnInit(): void {
    this.values = localStorage.getItem('is_calculation');
this.answer=JSON.parse(this.values)
    console.log(JSON.parse(this.values), 'sss');
  }
}
