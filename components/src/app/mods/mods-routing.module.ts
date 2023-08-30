import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeHomeComponent } from './mode-home/mode-home.component';

const routes: Routes = [
  {
    path: "",
    component: ModeHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
