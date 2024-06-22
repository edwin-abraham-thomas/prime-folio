import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment.development';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApiModule } from './api/api.module';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      AuthModule.forRoot({
        ...environment.auth,
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      }),
      ApiModule.forRoot({ rootUrl: environment.apiBaseURL }),
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};
