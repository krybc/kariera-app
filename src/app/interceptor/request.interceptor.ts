import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.endsWith('.json')) {
      req = req.clone({ url: environment.apiUrl + req.url});
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    }

    return next.handle(req);
  }
}
