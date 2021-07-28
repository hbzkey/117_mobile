import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyclassMemberPageRoutingModule } from './myclass-member-routing.module';

import { MyclassMemberPage } from './myclass-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyclassMemberPageRoutingModule
  ],
  declarations: [MyclassMemberPage]
})
export class MyclassMemberPageModule {}
