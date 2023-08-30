import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PalceholderComponent } from './palceholder/palceholder.component';
import { TimesDirective } from './directive/times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PalceholderComponent,
    TimesDirective,
    SegmentComponent
    
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
 
})
export class ElementsModule { }
