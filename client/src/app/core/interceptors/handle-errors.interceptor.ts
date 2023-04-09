import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {   Observable, throwError } from 'rxjs';
import {   catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    next.handle(request)
    return next.handle(request).pipe(
      catchError(err =>{
        console.log(err);
        if(err.error.statusCode===400){
          console.log('400');
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
        }
        if(err.error.statusCode===404){
          console.log('404');
        }
        if(err.error.statusCode===500){
          console.log('500');
        }

        return throwError('')
      })
      )
    }
}
