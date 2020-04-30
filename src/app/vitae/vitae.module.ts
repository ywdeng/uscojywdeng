import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitaeRoutingModule } from './vitae-routing.module';
import { VitaeComponent } from './vitae.component';


@NgModule({
  declarations: [VitaeComponent],
  imports: [
    CommonModule,
    VitaeRoutingModule
  ],
  exports: [VitaeComponent]
})
export class VitaeModule { }
