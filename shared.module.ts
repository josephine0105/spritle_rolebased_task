import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    MainComponent,
    CalculationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
