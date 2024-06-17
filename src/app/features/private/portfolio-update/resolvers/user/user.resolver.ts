import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService, AuthState, User } from '@auth0/auth0-angular';

export const userResolver: ResolveFn<User> = async (route, state) => {
  
  var authService = inject(AuthService)
  authService.appState$
  .subscribe(data => {
    console.log(data)
  })
  return new User();
};
