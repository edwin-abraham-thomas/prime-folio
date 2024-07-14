import { Routes } from '@angular/router';
import { UserProfileContainerComponent } from './features/private/user-profile/components/containers/user-profile-container/user-profile-container.component';
import { RouteSegments } from './shared/models/route-segments';
import { HomeComponent } from './core/components/home/home.component';
import { ErrorComponent } from './core/components/error/error.component';
import { userResolver } from './features/private/portfolio-update/resolvers/user/user.resolver';
import { authGuard } from './shared/guards/guards/auth.guard';
import { contentResolver } from './features/private/portfolio-update/resolvers/content/content.resolver';
import { ContentUpdateContainerComponent } from './features/private/portfolio-update/components/containers/content-update-container/content-update-container.component';

export const routes: Routes = [
  {
    path: RouteSegments.home,
    component: HomeComponent,
  },
  {
    path: RouteSegments.portfolio_update,
    component: ContentUpdateContainerComponent,
    resolve: {
      // user: userResolver,
      content: contentResolver,
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
