import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangComponent {

}
