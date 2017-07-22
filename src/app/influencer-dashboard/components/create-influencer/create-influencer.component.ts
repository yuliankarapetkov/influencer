import { Component, Output, EventEmitter } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';

@Component({
    selector: 'create-influencer',
    styleUrls: [],
    template: `
        <form (ngSubmit)="onCreate(form.value, form.valid)" #form="ngForm" novalidate>
            <div>
                Name: 
                <input 
                    type="text" 
                    name="name"
                    required
                    #name="ngModel"
                    [ngModel]="item?.name" />
            </div>
            <div>
                Category:
                <input 
                    type="text" 
                    name="category"
                    required
                    #category="ngModel"
                    [ngModel]="item?.category" />
            </div>
            <div>
                Location: 
                <input 
                    type="text" 
                    name="location"
                    #location="ngModel"
                    [ngModel]="item?.location" />
            </div>
            <button type="submit" [disabled]="form.invalid">
                Add
            </button>
        </form>
    `
})
export class CreateInfluencerComponent {
    item: Influencer;

    @Output()
    create: EventEmitter<Influencer>;

    constructor() {
        this.create = new EventEmitter<Influencer>();
    }

    onCreate(influencer: Influencer, isValid: boolean) {
        if (isValid) {
            this.create.emit(influencer);
        }
    }
}