import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { InfluencerDashboardRoutingModule } from './influencer-dashboard-routing.module';

import { InfluencerDashboardComponent } from './containers/influencer-dashboard/influencer-dashboard.component';
import { InfluencerDetailsComponent } from './containers/influencer-details/influencer-details.component';

import { InfluencerItemComponent } from './components/influencer-item/influencer-item.component';
import { CreateInfluencerComponent } from './components/create-influencer/create-influencer.component';
import { PreviewInfluencerComponent } from './components/preview-influencer/preview-influencer.component';

@NgModule({
  declarations: [
      InfluencerDashboardComponent,
      InfluencerDetailsComponent,
      InfluencerItemComponent,
      CreateInfluencerComponent,
      PreviewInfluencerComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule,
    InfluencerDashboardRoutingModule
  ],
  exports: [
    InfluencerDashboardComponent
  ]
})
export class InfluencerDashboardModule { }
