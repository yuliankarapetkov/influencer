import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { InfluencerDashboardComponent } from './containers/influencer-dashboard/influencer-dashboard.component';
import { InfluencerItemComponent } from './components/influencer-item/influencer-item.component';
import { CreateInfluencerComponent } from './components/create-influencer/create-influencer.component';

@NgModule({
  declarations: [
      InfluencerDashboardComponent,
      InfluencerItemComponent,
      CreateInfluencerComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    InfluencerDashboardComponent
  ]
})
export class InfluencerDashboardModule { }
