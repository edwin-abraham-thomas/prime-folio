import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';
import { finalize } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Turn on the loading spinner
  loadingService.loadingStart();

  return next(req).pipe(
    finalize(() => {
      // Turn off the loading spinner
      loadingService.loadingStop();
    })
  );
};
