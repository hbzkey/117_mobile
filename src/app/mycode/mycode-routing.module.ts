import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycodePage } from './mycode.page';

const routes: Routes = [
  {
    path: '',
    component: MycodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycodePageRoutingModule {}
