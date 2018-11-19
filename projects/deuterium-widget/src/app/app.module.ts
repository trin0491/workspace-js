import { BrowserModule } from "@angular/platform-browser";
import {Injector, NgModule} from "@angular/core";

import { DeuteriumWidgetComponent } from "./deuterium-widget.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    DeuteriumWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [DeuteriumWidgetComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const AppComponentElement = createCustomElement(DeuteriumWidgetComponent, { injector: this.injector });
    customElements.define("deuterium-widget", AppComponentElement);
  }
}
