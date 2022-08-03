import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFlashcardPage } from './create-flashcard.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFlashcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFlashcardPageRoutingModule {}
