import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MenubarModule, CardModule, ButtonModule, BadgeModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
