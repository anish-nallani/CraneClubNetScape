import { Routes } from '@angular/router';
import { Index } from './index';
import { About } from './about/about';
import { Press } from './press/press';
import { Tutorials } from './tutorials/tutorials';
export const routes: Routes = [
  { path: '', component: Index },
  { path: 'about', component: About },
  { path: 'press', component: Press},
  { path: 'tutorials', component: Tutorials
  }
];
