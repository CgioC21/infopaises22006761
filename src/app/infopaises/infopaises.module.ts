import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopaisesPageRoutingModule } from './infopaises-routing.module';

import { InfoPaisesPage } from './infopaises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopaisesPageRoutingModule
  ],
  declarations: [InfoPaisesPage]
})
export class InfopaisesPageModule {}
