import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, 
  next:HttpHandlerFn) => {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token')
    });
  return next(authReq).pipe(
    catchError((error) => {
      if([0].includes(error.status)) {
        console.log('404 Not Found');
      }
    console.error('Caught in ErrorInterceptor', error.message);
    return throwError(() => error)
  }));
};