import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessloginPageRoutingModule } from './messlogin-routing.module';

import { MessloginPage } from './messlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessloginPageRoutingModule
  ],
  declarations: [MessloginPage]
})
export class MessloginPageModule {}
