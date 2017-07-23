import { Component, Input } from '@angular/core';

import { Influencer } from '../../../shared/models/influencer.interface';

@Component({
    selector: 'preview-influencer',
    template: `
        <div>
            <div>
                Name: {{ item?.name }}
            </div>
            <div>
                Category: {{ item?.category.name }}
            </div>
            <div>
                Location: {{ item?.location }}
            </div>
        </div>
    `
})
export class PreviewInfluencerComponent {
    @Input()
    item: Influencer;

    constructor() {
    }
}