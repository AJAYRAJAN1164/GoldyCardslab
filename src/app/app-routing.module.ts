import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefualtLayoutComponent } from './layout/defualt_layout/defualt-layout/defualt-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefualtLayoutComponent,
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product_details/:id',
    component: DefualtLayoutComponent,
    loadChildren: () =>
      import('./views/products/products.module').then((m) => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
