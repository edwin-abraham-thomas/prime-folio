import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom, lastValueFrom, switchMap, tap } from 'rxjs';
import { UserService } from '../../../api/services';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const userService = inject(UserService);

  const auth0Authenticated$ = authService.isAuthenticated$.pipe(
    tap((loggedIn) => {
      if (!loggedIn) {
        authService.loginWithRedirect({
          appState: { target: state.url },
        });
      }
    }),
    switchMap(async (loggedIn) => {
      if (!loggedIn) {
        return false;
      }
      const user = await firstValueFrom(authService.idTokenClaims$);
      const apiVerifyresponse$ = userService.apiUserCreateOrVerifyUserPost$Json$Response(
        {
          body: {
            userId: user?.email ?? '',
            firstName: user?.name ?? '',
            lastName: user?.family_name ?? '',
            email: user?.email ?? '',
            phone: user?.phone_number ?? ''
          }
        }
      )

      const response = await firstValueFrom(apiVerifyresponse$)
      console.log('user verify response', response)
      return response.body.isPrimeFolioVerified
    })
  );

  const result = await firstValueFrom(auth0Authenticated$);
  return result ?? false;
};
