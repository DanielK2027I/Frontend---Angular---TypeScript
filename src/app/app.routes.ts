import { Routes } from '@angular/router';

export const routes: Routes = [

{path: 'market', loadChildren: () => import('./features/routes') },
  { path: '', redirectTo: 'market/login', pathMatch: 'full' }
];

