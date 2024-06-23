import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { firstValueFrom, switchMap, tap } from 'rxjs';
import { UserService } from '../../../api/services';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  
  return await authService.isAuthenticated(state.url)
};
