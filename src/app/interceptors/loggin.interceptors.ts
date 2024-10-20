import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

function logginInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn ):Observable<HttpEvent<unknown>>{
  return next(req).pipe(tap((event) => {
    if(event.type === HttpEventType.Response){
      console.log(req.url, ' Returned whit status ', event.status)
    }
  }))

}

export default logginInterceptor
