import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angular2-qrcode';
import { MyclassDetailPageRoutingModule } from './myclass-detail-routing.module';

import { MyclassDetailPage } from './myclass-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyclassDetailPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [MyclassDetailPage]
})
export class MyclassDetailPageModule {}
