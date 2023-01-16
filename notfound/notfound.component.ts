import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(public _service:ServiceService,public router:Router) { }

  ngOnInit(): void {
  }
  goback(){
    if(this._service.isAuthenticated()){
      this.router.navigate(['/home'])
    }
    else{
      this.router.navigate(['/'])
    }
  }
}
