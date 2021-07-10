import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from '../material/material.module';
import { DashboardService } from './dashboard.service';
import { FormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
