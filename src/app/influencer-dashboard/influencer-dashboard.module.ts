import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './../shared/shared.module';

import { InfluencerDashboardComponent } from './containers/influencer-dashboard/influencer-dashboard.component';
import { InfluencerItemComponent } from './components/influencer-item/influencer-item.component';

@NgModule({
  declarations: [
      InfluencerDashboardComponent,
      InfluencerItemComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    InfluencerDashboardComponent
  ]
})
export class InfluencerDashboardModule { }
