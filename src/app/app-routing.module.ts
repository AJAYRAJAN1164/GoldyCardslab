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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
