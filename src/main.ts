import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import logginInterceptor from './app/interceptors/request.interceptors';
import { LogginGuard } from './app/guards/loggin.guard';
import { LoggOutGuard } from './app/guards/loggout.guard';

bootstrapApplication(AppComponent, { providers: [
  LoggOutGuard,
  LogginGuard,
  appConfig.providers,
  provideHttpClient(
    withInterceptors([logginInterceptor])
  )
] })

  .catch((err) => console.error(err));
