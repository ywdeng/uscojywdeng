import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitaeComponent } from './vitae.component';


const routes: Routes = [
  {
    path: '',
    component: VitaeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitaeRoutingModule { }
