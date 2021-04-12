import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const pages: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'addclass',
    loadChildren: () => import('./addclass/addclass.module').then( m => m.AddclassPageModule)
  },{
    path: 'persondetail',
    loadChildren: () => import('./persondetail/persondetail.module').then( m => m.PersondetailPageModule)
  },{
    path: 'myclass',
    loadChildren: () => import('./myclass/myclass.module').then( m => m.MyclassPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(pages, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
