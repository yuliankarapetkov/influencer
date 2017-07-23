import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfluencerDashboardComponent } from './influencer-dashboard/containers/influencer-dashboard/influencer-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/influencers', pathMatch: 'full' },
  { path: 'influencers',  component: InfluencerDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}