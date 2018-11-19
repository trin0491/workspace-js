import { NgModule } from "@angular/core";
import {SharedLibService} from "./shared-lib.service";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    SharedLibService
  ]
})
export class SharedLibModule {
  constructor() {
    console.log("Created Shared Lib");
  }
}
