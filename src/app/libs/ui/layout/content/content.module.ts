import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  exports: [ContentComponent, BreadcrumbsModule],
  declarations: [],
  imports: [CommonModule, ContentComponent, BreadcrumbsModule],
})
export class ContentModule {}
