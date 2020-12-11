import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DimensionsModalComponent } from './components/dimensions-modal/dimensions-modal.component';
import { MaterialModule } from './ng-modules/material/material.module';
import { CarHeaderComponent } from './components/car-header/car-header.component';
import { CarHeaderMidComponent } from './components/car-header-mid/car-header-mid.component';
import { CarHeaderLastComponent } from './components/car-header-last/car-header-last.component';
import { PacketMainComponent } from './components/packet-main/packet-main.component';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    DimensionsModalComponent,
    CarHeaderComponent,
    CarHeaderMidComponent,
    CarHeaderLastComponent,
    PacketMainComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
