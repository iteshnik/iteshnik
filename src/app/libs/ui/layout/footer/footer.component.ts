import { Component } from '@angular/core';
import { SocialNetsComponent } from '../social-nets/social-nets.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialNetsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
