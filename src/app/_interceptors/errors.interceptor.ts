import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        console.log(req.url, ' Returned error whit status ', error.status)
      }

      return throwError(() => new Error(error.statusText))
    })
  )
};
