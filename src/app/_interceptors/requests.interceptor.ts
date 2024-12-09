import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, ' Returned success whit status ', event.status)
    }
  }))
};
