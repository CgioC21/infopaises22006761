import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPaisesPage } from './infopaises.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPaisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopaisesPageRoutingModule {}
