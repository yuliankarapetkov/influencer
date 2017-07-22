import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';
import { Category } from '../../../shared/models/category.interface';

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
                <select
                    name="categoryId"
                    required
                    [ngModel]="item?.categoryId">
                    <option 
                        *ngFor="let category of categories"
                        [value]="category.id">
                        {{ category.name }}
                    </option>
                </select>
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
    @Input()
    categories: Category[];

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