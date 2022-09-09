import { Injectable } from '@angular/core';
import { HttpXsrfTokenExtractor, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const cookieheaderName = 'XSRF-TOKEN';
  let csrfToken = this.tokenExtractor.getToken() as string;
  if (csrfToken !== null && !req.headers.has(cookieheaderName)) {
  req = req.clone({ headers: req.headers.set(cookieheaderName, csrfToken) });
  }
  console.log("interceptor" + this.tokenExtractor.getToken())
  return next.handle(req);
  }
  }
