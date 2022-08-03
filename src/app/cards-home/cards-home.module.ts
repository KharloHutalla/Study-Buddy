import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsHomePageRoutingModule } from './cards-home-routing.module';

import { CardsHomePage } from './cards-home.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    CardsHomePageRoutingModule
  ],
  declarations: [CardsHomePage]
})
export class CardsHomePageModule {}
