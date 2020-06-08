import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatDialogModule
    ]
})

export class NgMaterialModule { }
