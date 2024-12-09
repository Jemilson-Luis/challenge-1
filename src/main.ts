import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { errorsInterceptor } from './app/_interceptors/errors.interceptor';
import { requestsInterceptor } from './app/_interceptors/requests.interceptor';

bootstrapApplication(AppComponent, { providers: [
  appConfig.providers,
  provideHttpClient(
    withInterceptors([errorsInterceptor, requestsInterceptor])
  )
] })

  .catch((err) => console.error(err));
