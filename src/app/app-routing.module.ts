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
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
