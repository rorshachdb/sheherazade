import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule} from "@angular/material/icon";

import { ShzComponent } from './shz.component';
import { HeaderComponent } from './layout/header/header.component';
import { FlexModule} from "@angular/flex-layout";
import {ServicesModule} from "./services/services.module";
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { ViewsModule } from '@views/views.module';

@NgModule({
  declarations: [
    ShzComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    FlexModule,
    ServicesModule,
    AppRoutingModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [ShzComponent]
})
export class ShzModule { }
