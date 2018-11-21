import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const start = performance.now();
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    const duration = performance.now() - start;
    console.log("Finished bootstrap: ", duration);
  })
  .catch(err => console.error(err));
