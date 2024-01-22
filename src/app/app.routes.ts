import { Routes } from '@angular/router';
import { LayoutComponent } from './libs/ui/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HobbyComponent } from './pages/hobby/hobby.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { ShopComponent } from './pages/shop/shop.component';
/* ABOUT */
/*  ENG  */
import { EngComponent } from './pages/about/eng/eng.component';
import { AboutSiteEngComponent } from './pages/about/eng/about-site-eng/about-site-eng.component';
import { AboutMyselfEngComponent } from './pages/about/eng/about-myself-eng/about-myself-eng.component';
import { MyCvEngComponent } from './pages/about/eng/my-cv-eng/my-cv-eng.component';
import { SkilsEngComponent } from './pages/about/eng/skils-eng/skils-eng.component';
/*  DEU  */
import { DeuComponent } from './pages/about/deu/deu.component';
import { AboutSiteDeuComponent } from './pages/about/deu/about-site-deu/about-site-deu.component';
import { AboutMyselfDeuComponent } from './pages/about/deu/about-myself-deu/about-myself-deu.component';
import { MyCvDeuComponent } from './pages/about/deu/my-cv-deu/my-cv-deu.component';
import { SkilsDeuComponent } from './pages/about/deu/skils-deu/skils-deu.component';
/*  UKR  */
import { UkrComponent } from './pages/about/ukr/ukr.component';
import { AboutSiteUkrComponent } from './pages/about/ukr/about-site-ukr/about-site-ukr.component';
import { AboutMyselfUkrComponent } from './pages/about/ukr/about-myself-ukr/about-myself-ukr.component';
import { MyCvUkrComponent } from './pages/about/ukr/my-cv-ukr/my-cv-ukr.component';
import { SkilsUkrComponent } from './pages/about/ukr/skils-ukr/skils-ukr.component';
/*  RUS  */
import { RusComponent } from './pages/about/rus/rus.component';
import { AboutSiteRusComponent } from './pages/about/rus/about-site-rus/about-site-rus.component';
import { AboutMyselfRusComponent } from './pages/about/rus/about-myself-rus/about-myself-rus.component';
import { MyCvRusComponent } from './pages/about/rus/my-cv-rus/my-cv-rus.component';
import { SkilsRusComponent } from './pages/about/rus/skils-rus/skils-rus.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [],
      },
      {
        path: 'shop',
        component: ShopComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'blog',
        component: BlogComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'hobby',
        component: HobbyComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        children: [
          // routes
        ],
      },
      {
        path: 'tools',
        component: ToolsComponent,
        children: [
          // routes
        ],
      },
      /*  DEU  */
      { path: 'about/deu', component: DeuComponent },
      { path: 'about/deu/aboutsite', component: AboutSiteDeuComponent },
      { path: 'about/deu/aboutmyself', component: AboutMyselfDeuComponent },
      { path: 'about/deu/mycv', component: MyCvDeuComponent },
      { path: 'about/deu/skils', component: SkilsDeuComponent },
      /*  ENG  */
      { path: 'about/eng', component: EngComponent },
      { path: 'about/eng/aboutsite', component: AboutSiteEngComponent },
      { path: 'about/eng/aboutmyself', component: AboutMyselfEngComponent },
      { path: 'about/eng/mycv', component: MyCvEngComponent },
      { path: 'about/eng/skils', component: SkilsEngComponent },
      /*  UKR  */
      { path: 'about/ukr', component: UkrComponent },
      { path: 'about/ukr/aboutsite', component: AboutSiteUkrComponent },
      { path: 'about/ukr/aboutmyself', component: AboutMyselfUkrComponent },
      { path: 'about/ukr/mycv', component: MyCvUkrComponent },
      { path: 'about/ukr/skils', component: SkilsUkrComponent },
      /*  RUS  */
      { path: 'about/rus', component: RusComponent },
      { path: 'about/rus/aboutsite', component: AboutSiteRusComponent },
      { path: 'about/rus/aboutmyself', component: AboutMyselfRusComponent },
      { path: 'about/rus/mycv', component: MyCvRusComponent },
      { path: 'about/rus/skils', component: SkilsRusComponent },
    ],
  },
];
