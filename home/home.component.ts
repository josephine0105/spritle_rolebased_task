import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  isStudent: boolean = false;
  constructor(public router: Router, public _service: ServiceService) {}

  ngOnInit(): void {
    console.log(this._service.roles(),'sddddddd') 
    if (this._service.roles() == true) {
      this.isAdmin = true;
    } else {
      this.isStudent = true;;
    }
  }
  logout() {
    this.router.navigate(['/']);
  }
  dashboard(){
    this.router.navigate(['/home/dashboard']);
  }
}
