import { BrowserModule } from "@angular/platform-browser";
import {Injector, NgModule} from "@angular/core";

import { UraniumWidgetComponent } from "./uranium-widget.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    UraniumWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [UraniumWidgetComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const AppComponentElement = createCustomElement(UraniumWidgetComponent, { injector: this.injector });
    customElements.define("uranium-widget", AppComponentElement);
  }
}
