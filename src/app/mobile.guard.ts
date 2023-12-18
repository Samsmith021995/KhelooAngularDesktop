import { CanActivateFn } from '@angular/router';

export const mobileGuard: CanActivateFn = (route, state) => {
  return true;
};
