import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
/* ABOUT */
/*  ENG  */
import { AboutSiteEngComponent } from './eng/about-site-eng/about-site-eng.component';
import { AboutMyselfEngComponent } from './eng/about-myself-eng/about-myself-eng.component';
import { MyCvEngComponent } from './eng/my-cv-eng/my-cv-eng.component';
import { SkilsEngComponent } from './eng/skils-eng/skils-eng.component';
/*  DEU  */
import { AboutSiteDeuComponent } from './deu/about-site-deu/about-site-deu.component';
import { AboutMyselfDeuComponent } from './deu/about-myself-deu/about-myself-deu.component';
import { MyCvDeuComponent } from './deu/my-cv-deu/my-cv-deu.component';
import { SkilsDeuComponent } from './deu/skils-deu/skils-deu.component';
/*  UKR  */
import { AboutSiteUkrComponent } from './ukr/about-site-ukr/about-site-ukr.component';
import { AboutMyselfUkrComponent } from './ukr/about-myself-ukr/about-myself-ukr.component';
import { MyCvUkrComponent } from './ukr/my-cv-ukr/my-cv-ukr.component';
import { SkilsUkrComponent } from './ukr/skils-ukr/skils-ukr.component';
/*  RUS  */
import { AboutSiteRusComponent } from './rus/about-site-rus/about-site-rus.component';
import { AboutMyselfRusComponent } from './rus/about-myself-rus/about-myself-rus.component';
import { MyCvRusComponent } from './rus/my-cv-rus/my-cv-rus.component';
import { SkilsRusComponent } from './rus/skils-rus/skils-rus.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutSiteDeuComponent,
    children: [
      /*  DEU  */
      { path: 'about/deu/aboutsite', component: AboutSiteDeuComponent },
      { path: 'about/deu/aboutmyself', component: AboutMyselfDeuComponent },
      { path: 'about/deu/mycv', component: MyCvDeuComponent },
      { path: 'about/deu/skils', component: SkilsDeuComponent },
      /*  ENG  */
      { path: 'about/eng/aboutsite', component: AboutSiteEngComponent },
      { path: 'about/eng/aboutmyself', component: AboutMyselfEngComponent },
      { path: 'about/eng/mycv', component: MyCvEngComponent },
      { path: 'about/eng/skils', component: SkilsEngComponent },
      /*  UKR  */
      { path: 'about/ukr/aboutsite', component: AboutSiteUkrComponent },
      { path: 'about/ukr/aboutmyself', component: AboutMyselfUkrComponent },
      { path: 'about/ukr/mycv', component: MyCvUkrComponent },
      { path: 'about/ukr/skils', component: SkilsUkrComponent },
      /*  RUS  */
      { path: 'about/rus/aboutsite', component: AboutSiteRusComponent },
      { path: 'about/rus/aboutmyself', component: AboutMyselfRusComponent },
      { path: 'about/rus/mycv', component: MyCvRusComponent },
      { path: 'about/rus/skils', component: SkilsRusComponent },
    ],
  },
];
