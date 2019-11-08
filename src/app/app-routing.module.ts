import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//
const routes: Routes = [
  {
    path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'panel', loadChildren: './panel/panel.module#PanelPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'creditosver', loadChildren: './creditosver/creditosver.module#CreditosverPageModule' },
  { path: 'paneladmin', loadChildren: './paneladmin/paneladmin.module#PaneladminPageModule' },
  { path: 'usersver', loadChildren: './usersver/usersver.module#UsersverPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
