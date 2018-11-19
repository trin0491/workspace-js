import { BrowserModule } from "@angular/platform-browser";
import {Injector, NgModule} from "@angular/core";

import { HydrogenWidgetComponent } from "./hydrogen-widget.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    HydrogenWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HydrogenWidgetComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const AppComponentElement = createCustomElement(HydrogenWidgetComponent, { injector: this.injector });
    customElements.define("hydrogen-widget", AppComponentElement);
  }

}
