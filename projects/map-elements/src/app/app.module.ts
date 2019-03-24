import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent, HelloWorldComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    // Convert `HelloWorldComponent` to a custom element.
    const HelloWorldElement = createCustomElement(HelloWorldComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('hello-word-element', HelloWorldElement);
  }

}
