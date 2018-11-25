import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const start = performance.now();
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    const duration = performance.now() - start;
    console.log("Uranium bootstrap: ", duration);
  })
  .catch(err => console.error(err));
