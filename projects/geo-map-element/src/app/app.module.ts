/** Angular Imports **/
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement, NgElementConfig } from '@angular/elements';

import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

/** Component Import **/
import { GeoMapComponent } from './geo-map/geo-map.component';

@NgModule({
  declarations: [GeoMapComponent],
  imports: [BrowserModule],
  exports: [GeoMapComponent],
  entryComponents: [GeoMapComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(GeoMapComponent, this.injector);
    const config: NgElementConfig = { injector: this.injector, strategyFactory };

    // Convert `GeoMapComponent` to a custom element.
    const ngElement = createCustomElement(GeoMapComponent, config);

    // Register the custom element with the browser.
    customElements.define('geo-map-element', ngElement);
  }

}
