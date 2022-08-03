import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsHomePage } from './cards-home.page';

const routes: Routes = [
  {
    path: '',
    component: CardsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsHomePageRoutingModule {}
