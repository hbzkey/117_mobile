import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessloginPage } from './messlogin.page';

const routes: Routes = [
  {
    path: '',
    component: MessloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessloginPageRoutingModule {}
