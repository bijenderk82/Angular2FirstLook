import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

const plateform = platformBrowserDynamic();

plateform.bootstrapModule(AppModule);