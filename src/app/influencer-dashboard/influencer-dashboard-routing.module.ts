import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfluencerDashboardComponent } from './containers/influencer-dashboard/influencer-dashboard.component';
import { InfluencerDetailsComponent } from './containers/influencer-details/influencer-details.component';

const routes: Routes = [
  {
    path: 'influencers',
    children: [
     { path: '', component: InfluencerDashboardComponent },
     { path: ':id', component: InfluencerDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InfluencerDashboardRoutingModule {}