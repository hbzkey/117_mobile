import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesssignPage } from './messsign.page';

const routes: Routes = [
  {
    path: '',
    component: MesssignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesssignPageRoutingModule {}
