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
        label: 'Home',
        routerLink: '/home',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Shop',
        routerLink: '/shop',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Errors',
        routerLink: '/errors',
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }

  isActiveChange(e: any) {
    console.log(e);
  }
}
