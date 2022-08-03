import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNPage } from './home-n.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNPageRoutingModule {}
