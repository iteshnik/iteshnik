import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HobbyComponent {

}
