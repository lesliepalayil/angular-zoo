import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent  } from './dashboard/dashboard.component';
import { AnimalsComponent } from '../animals/animals.component';
import { ZooDashboardRoutingModule } from './zoo-dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    ZooDashboardRoutingModule
  ]
})
export class ZooDashboardModule { }
