import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';

@Component({
    selector: 'influencer-item',
    styleUrls: ['influencer-item.component.scss'],
    template: `
        <div class="influencer-item">
            <div [hidden]="!editing">
                <input 
                    type="text" 
                    name="name"
                    #name="ngModel"
                    required
                    [(ngModel)]="item.name" />
            </div>
            <div *ngIf="!editing">
                {{ item?.name }}
            </div>
            <div>
                Category: {{ item?.category.name }}
            </div>
            <div>
                Location: {{ item?.location }}
            </div>
            <button [disabled]="editing && name.errors" (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
            <button (click)="onView()">
                View
            </button>
        </div>
    `
})
export class InfluencerItemComponent implements OnChanges {
    @Input()
    item: Influencer;

    @Output()
    update: EventEmitter<Influencer>;

    @Output()
    remove: EventEmitter<Influencer>;

    @Output()
    view: EventEmitter<Influencer>;

    editing: boolean;

    constructor() {
        this.editing = false;
        this.update = new EventEmitter<Influencer>();
        this.remove = new EventEmitter<Influencer>();
        this.view = new EventEmitter<Influencer>();
    }

    ngOnChanges(changes) {
        if (changes.item) {
            this.item = Object.assign({}, changes.item.currentValue);
        }
    }

    onRemove() {
        this.remove.emit(this.item);
    }

    onView() {
        this.view.emit(this.item);
    }

    toggleEdit() {
        if (this.editing) {
            this.update.emit(this.item);
        }
        this.editing = !this.editing;
    }
}