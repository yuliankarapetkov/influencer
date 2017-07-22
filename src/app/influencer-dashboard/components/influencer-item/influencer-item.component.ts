import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';

@Component({
    selector: 'influencer-item',
    styleUrls: ['influencer-item.component.scss'],
    template: `
        <div class="influencer-item">
            <div *ngIf="editing">
                <input 
                    type="text" 
                    #name
                    [value]="item?.name"
                    (input)="onNameChange(name.value)" />
            </div>
            <div *ngIf="!editing">
                {{ item?.name }}
            </div>
            <div>
                Category: {{ item?.category }}
            </div>
            <div>
                Location: {{ item?.location }}
            </div>
            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})
export class InfluencerItemComponent implements OnChanges, OnInit {
    @Input()
    item: Influencer;

    @Output()
    edit: EventEmitter<Influencer>;

    @Output()
    remove: EventEmitter<Influencer>;

    editing: boolean;

    constructor() {
        this.editing = false;
        this.edit = new EventEmitter<Influencer>();
        this.remove = new EventEmitter<Influencer>();
    }

    ngOnChanges(changes) {
        if (changes.item) {
            this.item = Object.assign({}, changes.item.currentValue);
        }
    }

    ngOnInit() {

    }

    onNameChange(value) {
        this.item.name = value;
    }

    onRemove() {
        this.remove.emit(this.item);
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.item);
        }
        this.editing = !this.editing;
    }
}