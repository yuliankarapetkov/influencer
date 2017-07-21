import { Component, OnInit } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';

import { InfluencerService } from '../../../shared/services/influencer.service';

@Component({
    selector: 'influencer-dashboard',
    styleUrls: [],
    template: `
        <div>
            <h1>Influencer Dashboard</h1>
            <influencer-item 
                *ngFor="let influencer of influencers" 
                [item]="influencer"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </influencer-item>
        </div>
    `
})
export class InfluencerDashboardComponent implements OnInit {
    influencers: Influencer[];

    constructor(private influencerService: InfluencerService) {
    }

    ngOnInit() {
        this.influencerService
            .getInfluencers()
            .subscribe((data: Influencer[]) => this.influencers = data);
    }

    handleEdit(event: Influencer) {
        this.influencers = this.influencers.map((influencer: Influencer) => {
            if (influencer.id === event.id) {
                influencer = Object.assign({}, influencer, event);
            }
            return influencer;
        });
    }

    handleRemove(event: Influencer) {
        this.influencers = this.influencers.filter((influencer: Influencer) => {
            return influencer.id !== event.id;
        });
    }
}