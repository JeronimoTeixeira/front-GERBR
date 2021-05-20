import { AccountService } from './../account/shared/account.service';
import { Injectable } from '@angular/core';
import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService){}
  
intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(token){
        request = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
    }

    return next.handle(request);
  }
}

