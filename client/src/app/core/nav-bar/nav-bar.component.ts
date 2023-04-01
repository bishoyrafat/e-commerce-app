import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Feature',
      },
      {
        label: 'Enterprise',
      },
      {
        label: 'Support',
      },
      {
        label: 'Pricing',
      },
    ];
  }
}
