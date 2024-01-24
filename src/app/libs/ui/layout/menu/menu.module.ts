import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  exports: [MenuComponent],
  declarations: [],
  imports: [CommonModule, MenuComponent],
})
export class MenuModule {}
