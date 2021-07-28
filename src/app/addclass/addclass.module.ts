import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclassPageRoutingModule } from './addclass-routing.module';

import { AddclassPage } from './addclass.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    AddclassPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [AddclassPage]
})
export class AddclassPageModule {}
