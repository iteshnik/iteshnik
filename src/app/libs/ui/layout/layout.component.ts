import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutModule } from './layout.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LayoutModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
