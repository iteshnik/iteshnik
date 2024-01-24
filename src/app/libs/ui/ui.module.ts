import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  exports: [LayoutModule],
  declarations: [],
  imports: [CommonModule, LayoutModule],
})
export class UiModule {}
