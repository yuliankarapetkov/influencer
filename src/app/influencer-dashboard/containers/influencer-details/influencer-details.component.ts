import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Influencer } from '../../../shared/models/influencer.interface';

import { InfluencerService } from '../../../shared/services/influencer.service';

@Component({
    selector: 'influencer-details',
    styleUrls: [],
    template: `
        <div>
            <h1>{{ influencer?.name }}</h1>
            <preview-influencer 
                [item]="influencer">
            </preview-influencer>
            <button (click)="goBack()">
                Go back
            </button>
        </div>
    `
})
export class InfluencerDetailsComponent implements OnInit {
    influencer: Influencer;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private influencerService: InfluencerService
    ) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((data: Influencer) => this.influencerService.getInfluencer(data.id))
            .subscribe((data: Influencer) => this.influencer = data);
    }

    goBack() {
        this.router.navigate(['/influencers']);
    }
}