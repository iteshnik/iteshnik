import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangComponent } from './lang.component';

@NgModule({
  exports: [LangComponent],
  declarations: [],
  imports: [CommonModule, LangComponent],
})
export class LangModule {}
