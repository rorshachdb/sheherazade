import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'

import { ShzComponent } from './shz.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    ShzComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ShzComponent]
})
export class ShzModule { }
