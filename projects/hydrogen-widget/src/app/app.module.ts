import { BrowserModule } from "@angular/platform-browser";
import {Injector, NgModule} from "@angular/core";

import { AppComponent } from "./app.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const AppComponentElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("ws-hydrogen-widget", AppComponentElement);
  }

}
