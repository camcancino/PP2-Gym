import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPageRoutingModule } from './rutina-routing.module';

import { RutinaPage } from './rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPageRoutingModule
  ],
  declarations: [RutinaPage]
})
export class RutinaPageModule {}
