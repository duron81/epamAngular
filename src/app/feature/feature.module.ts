import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { InputComponent } from '../courses/input/input.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  providers: [InputComponent]
})
export class FeatureModule { }
