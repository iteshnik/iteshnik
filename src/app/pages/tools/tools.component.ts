import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsComponent {

}
