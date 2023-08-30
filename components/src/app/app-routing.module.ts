import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'elements' , loadChildren:()=>import('./elements/elements.module').then((mod)=> mod.ElementsModule)
  },
  {
    path:'collections' , loadChildren:()=>import('./collections/collections.module').then((mod)=> mod.CollectionsModule)
  },
  {
    path:'views' , loadChildren:()=>import('./views/views.module').then((mod)=> mod.ViewsModule)
  },
  {
    path:'mods' , loadChildren:()=>import('./mods/mods.module').then((mod)=> mod.ModsModule)
  },
  {
    path :'' , component : HomeComponent
  },
  {
    path :'**' , component :NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
