import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, 
         HttpEvent, 
         HttpHandlerFn, 
         withInterceptors,
         HttpRequest
                           } from '@angular/common/http';
import { Observable } from 'rxjs';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideClientHydration(), 
              provideHttpClient(withInterceptors([loggingInterceptor]),),
            ]
};

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):
  Observable<HttpEvent<unknown>> {
    console.log(`Request URL is: ${req.url} `);
    return next(req);
}
