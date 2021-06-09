import { CategoriesComponent } from './layouts/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BACKEND_ROUTES } from './routes/admin-layout-routes';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AccueilComponent } from './layouts/accueil/accueil.component';

const routes: Routes = [
 /*  {
    path: '',
    component: AccueilComponent
  }, */
  {
    path: 'shop-categories',
    component: CategoriesComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: DEFAULT_ROUTES
  },
  {
    path: 'backend',
    component: AdminLayoutComponent,
    children: BACKEND_ROUTES
  },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
