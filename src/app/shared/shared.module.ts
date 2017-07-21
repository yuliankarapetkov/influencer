import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Influencer } from './models/influencer.interface';

import { sharedServices } from './services';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
    ],
    providers: [
        sharedServices
    ]
})
export class SharedModule { }
