import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _loaderService :LoaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loaderStatus$.next(true)
    const token = `JWT token from Ls`

    const reqClone =request.clone({
      setHeaders : {
        "content-type" : "application/json",
        "token" : token
      }
    })


    return next.handle(reqClone)
    .pipe(finalize(()=>{
      this._loaderService.loaderStatus$.next(false)
    }));

  }
}
