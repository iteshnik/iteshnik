import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  exports: [HeaderComponent],
  declarations: [],
  imports: [CommonModule, HeaderComponent],
})
export class HeaderModule {}
