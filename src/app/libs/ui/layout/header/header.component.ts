import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { LangComponent } from '../lang/lang.component';
import { LogoComponent } from '../logo/logo.component';
import { SearchComponent } from '../search/search.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    LangComponent,
    LogoComponent,
    SearchComponent,
    SigninComponent,
    SignupComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
