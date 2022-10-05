import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ElementComponent} from "@views/element/element.component";

const routes: Routes = [
  { path: 'elements', component: ElementComponent },
  { path: '',   redirectTo: '/elements', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
