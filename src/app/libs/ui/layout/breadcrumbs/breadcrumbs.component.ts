import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {}
