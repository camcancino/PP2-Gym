import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./socio/tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  {
    path: '',
    loadChildren: () => import('./socio/home/home.module').then( m => m.HomePageModule) // es la pagina de inicio ' ' 
    
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./socio/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
