import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'destinations',
    loadChildren: () => import('./destinations/destinations.module').then(m => m.DestinationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'itineraries',
    loadChildren: () => import('./itineraries/itineraries.module').then(m => m.ItinerariesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'suggestions',
    loadChildren: () => import('./suggestions/suggestions.module').then(m => m.SuggestionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-profile',
    component: CreateProfileComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }