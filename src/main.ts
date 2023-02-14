import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('assets/environment/environment.json').then((data) =>
  data.json().then((config) => {
    environment.CLIENT_ID = config.CLIENT_ID;
    environment.API_URL = config.API_URL;

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
);
