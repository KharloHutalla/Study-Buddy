import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNPageRoutingModule } from './home-n-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HomeNPage } from './home-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomeNPage]
})
export class HomeNPageModule {}
