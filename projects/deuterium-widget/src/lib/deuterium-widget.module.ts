import {Injector, NgModule} from "@angular/core";
import { DeuteriumWidgetComponent } from "./deuterium-widget.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [DeuteriumWidgetComponent],
  imports: [
  ],
  entryComponents: [DeuteriumWidgetComponent]
})
export class DeuteriumWidgetModule {
  constructor(private injector: Injector) {
    const CustomElement = createCustomElement(DeuteriumWidgetComponent, { injector: this.injector });
    customElements.define("deuterium-widget", CustomElement);
  }
}
