import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  count = 1;
  classOpen = 'close';

  openMenu() {
    this.count++;

    if (this.count % 2 === 0) {
      this.classOpen = 'open';
    } else {
      this.classOpen = 'close';
    }
  }
}
