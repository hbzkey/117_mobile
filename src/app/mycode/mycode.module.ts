import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angular2-qrcode';
import { MycodePageRoutingModule } from './mycode-routing.module';

import { MycodePage } from './mycode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycodePageRoutingModule,
    QRCodeModule,
  ],
  declarations: [MycodePage]
})
export class MycodePageModule {}
