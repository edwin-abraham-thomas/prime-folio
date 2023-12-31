import { Routes } from '@angular/router';
import { PortfolioUpdateContainerComponent } from './features/private/portfolio-update/components/containers/portfolio-update-container/portfolio-update-container.component';
import { UserProfileContainerComponent } from './features/private/user-profile/components/containers/user-profile-container/user-profile-container.component';
import { RouteSegments } from './shared/models/route-segments';
import { HomeComponent } from './core/components/home/home.component';
import { ErrorComponent } from './core/components/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: RouteSegments.home,
    component: HomeComponent
  },
  {
    path: RouteSegments.portfolio_update,
    component: PortfolioUpdateContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RouteSegments.user_profile,
    component: UserProfileContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RouteSegments.error,
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: RouteSegments.error
  }
];
