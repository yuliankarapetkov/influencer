import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Influencer } from '../../../shared/models/influencer.interface';
import { Category } from '../../../shared/models/category.interface';

import { InfluencerService } from '../../../shared/services/influencer.service';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
    selector: 'influencer-dashboard',
    styleUrls: [],
    template: `
        <div>
            <h1>Dashboard</h1>
            <h2>Create</h2>
            <create-influencer 
                (create)="handleCreate($event)"
                [categories]="categories">
            </create-influencer>
            <h2>Influencers</h2>
            <influencer-item 
                *ngFor="let influencer of influencers" 
                [item]="influencer"
                (update)="handleUpdate($event)"
                (remove)="handleRemove($event)"
                (view)="handleView($event)">
            </influencer-item>
        </div>
    `
})
export class InfluencerDashboardComponent implements OnInit {
    influencers: Influencer[];
    categories: Category[];

    constructor(
        private router: Router,
        private influencerService: InfluencerService,
        private categoryService: CategoryService
        ) {
    }

    ngOnInit() {
        this.influencerService
            .getInfluencers()
            .subscribe((data: Influencer[]) => this.influencers = data);
        this.categoryService
            .getCategories()
            .subscribe((data: Category[]) => this.categories = data);
    }

    handleCreate(event: Influencer) {
        this.influencerService
            .createInfluencer(event)
            .subscribe((data: Influencer) => {
                // This is needed, because the server returns an object without a category object inside it.
                let category = this.categories.find((category: Category) => category.id === +data.categoryId);
                this.influencers = [ ...this.influencers, {...data, category: category} ];
            });
    }

    handleUpdate(event: Influencer) {
        this.influencerService
            .updateInfluencer(event)
            .subscribe((data: Influencer) => {
                this.influencers = this.influencers.map((influencer: Influencer) => {
                    if (influencer.id === event.id) {
                        influencer = Object.assign({}, influencer, event);
                    }
                    return influencer;
                });
            });
    }

    handleRemove(event: Influencer) {
        this.influencerService
            .removeInfluencer(event)
            .subscribe((data: Influencer) => {
                this.influencers = this.influencers.filter((influencer: Influencer) => {
                    return influencer.id !== event.id;
                });
            });
    }

    handleView(event: Influencer) {
        this.router.navigate(['/influencers', event.id]);
    }
}