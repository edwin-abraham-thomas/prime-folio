import { Routes } from '@angular/router';
import { PortfolioUpdateContainerComponent } from './features/private/portfolio-update/components/containers/portfolio-update-container/portfolio-update-container.component';
import { UserProfileContainerComponent } from './features/private/user-profile/components/containers/user-profile-container/user-profile-container.component';

export const routes: Routes = [
  {
    path: 'portfolio-update',
    component: PortfolioUpdateContainerComponent,
  },
  {
    path: 'profile',
    component: UserProfileContainerComponent,
  },
];
