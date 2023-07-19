import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = !!localStorage.getItem('token');
  const router=inject(Router);
  const authService=inject(AuthService);
  
 return authService.isLoggedIn();
};
