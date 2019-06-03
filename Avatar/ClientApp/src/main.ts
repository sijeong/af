import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  var base = document.getElementsByTagName('base')[0].href;
  console.log(base == 'http://localhost:4200/' ? 'https://localhost:44384/' : 'http://localhost:4200/')
  return base == 'http://localhost:4200/' ? 'https://localhost:44384/' : 'http://localhost:4200/';
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
