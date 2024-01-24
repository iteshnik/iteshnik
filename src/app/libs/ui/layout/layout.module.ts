import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ContentModule } from './content/content.module';
import { MenuModule } from './menu/menu.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  exports: [
    HeaderModule,
    FooterModule,
    ContentModule,
    LayoutComponent,
    MenuModule,
  ],
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ContentModule,
    LayoutComponent,
    MenuModule,
  ],
})
export class LayoutModule {}
