import { Routes } from '@angular/router';
import { PortfolioUpdateContainerComponent } from './features/private/portfolio-update/components/containers/portfolio-update-container/portfolio-update-container.component';
import { UserProfileContainerComponent } from './features/private/user-profile/components/containers/user-profile-container/user-profile-container.component';
import { RouteSegments } from './shared/models/route-segments';
import { HomeComponent } from './core/components/home/home.component';
import { ErrorComponent } from './core/components/error/error.component';
import { portfolioResolver } from './features/private/portfolio-update/resolvers/portfolio/portfolio.resolver';
import { userResolver } from './features/private/portfolio-update/resolvers/user/user.resolver';
import { authGuard } from './shared/guards/guards/auth.guard';

export const routes: Routes = [
  {
    path: RouteSegments.home,
    component: HomeComponent,
  },
  {
    path: RouteSegments.portfolio_update,
    component: PortfolioUpdateContainerComponent,
    resolve: {
      user: userResolver,
      layout: portfolioResolver,
    },
    canActivate: [authGuard],
  },
  {
    path: RouteSegments.user_profile,
    component: UserProfileContainerComponent,
    canActivate: [authGuard],
  },
  {
    path: RouteSegments.error,
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: RouteSegments.error,
  },
];
