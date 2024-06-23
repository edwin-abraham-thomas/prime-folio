import { Injectable } from '@angular/core';
import { AuthService as Auth0, User } from '@auth0/auth0-angular';
import { environment } from '../../../../environments/environment';
import { Observable, firstValueFrom, mergeMap, of, switchMap } from 'rxjs';
import { UserService } from '../../../api/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null | undefined;
  isPrimeFolioApiVerified = false;

  constructor(private authService: Auth0, private userService: UserService) {}

  get isAuthenticated$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  loginWithRedirect(): void {
    this.authService.loginWithRedirect();
  }

  logout(): void {
    this.authService.logout({
      logoutParams: {
        returnTo: environment.auth.logoutRedirectUrl,
      },
    });
  }

  async isAuthenticated(loginAndRedirectTo: string): Promise<boolean> {
    const isValidUser$ = this.authService.isAuthenticated$.pipe(
      mergeMap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.authService.loginWithRedirect({
            appState: { target: loginAndRedirectTo },
          });
        }
        return of(isAuthenticated);
      }),
      mergeMap((user) => {
        return firstValueFrom(this.authService.user$);
      }),
      mergeMap(async (user) => {
        if (this.isPrimeFolioApiVerified) {
          return true;
        }
        const apiVerifyresponse$ =
          this.userService.apiUserCreateOrVerifyUserPost$Json$Response({
            body: {
              userId: user?.sub ?? '',
              firstName: user?.name ?? '',
              lastName: user?.family_name ?? '',
              email: user?.email ?? '',
              phone: user?.phone_number ?? '',
            },
          });

        const response = await firstValueFrom(apiVerifyresponse$);
        this.isPrimeFolioApiVerified =
          response.body.isPrimeFolioVerified ?? false;
        return response.body.isPrimeFolioVerified;
      })
    );

    const isValidUser = (await firstValueFrom(isValidUser$)) ?? false;

    return isValidUser;
  }
}
