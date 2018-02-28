import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule
        } from '@angular/material';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule
    ]
})
export class JangularMaterial{}
