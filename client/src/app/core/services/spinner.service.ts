import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private spinner: NgxSpinnerService) {}
  index = 0;

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();

  }
}
