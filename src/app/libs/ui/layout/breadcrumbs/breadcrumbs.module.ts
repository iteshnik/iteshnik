import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  exports: [BreadcrumbsComponent],
  declarations: [],
  imports: [CommonModule, BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
