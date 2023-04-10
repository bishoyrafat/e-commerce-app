import { SpinnerService } from './../services/spinner.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, delay } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}
  i = 0;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    this.spinnerService.showSpinner();
    this.i++;
    next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.i--;
        if(this.i===0){
         return this.spinnerService.hideSpinner();
        }

      })
    );
  }
}
