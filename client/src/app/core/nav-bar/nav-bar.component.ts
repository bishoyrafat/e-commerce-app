import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  items: MenuItem[] = [];
  breadcrumbs$:any
  constructor(private breadcrumbService: BreadcrumbService){}
  ngOnInit() {

     this.breadcrumbService.breadcrumbs$.subscribe((data)=>{
      this.breadcrumbs$ = data[data.length-1].label

    })

    this.items = [
      {
        label: 'Home',
        routerLink: '/',
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
