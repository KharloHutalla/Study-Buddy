import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFlashcardPageRoutingModule } from './create-flashcard-routing.module';

import { CreateFlashcardPage } from './create-flashcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFlashcardPageRoutingModule
  ],
  declarations: [CreateFlashcardPage]
})
export class CreateFlashcardPageModule {}
