import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [CommonModule, NgbDropdownModule],
  exports: [HeaderComponent, SideMenuComponent],
})
export class SharedModule {}
