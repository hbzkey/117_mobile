import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesssignPageRoutingModule } from './messsign-routing.module';

import { MesssignPage } from './messsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesssignPageRoutingModule
  ],
  declarations: [MesssignPage]
})
export class MesssignPageModule {}
