import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppModule as GeoMapModule} from '../../projects/geo-map-element/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeoMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
