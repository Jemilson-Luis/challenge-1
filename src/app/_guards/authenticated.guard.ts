import { CanActivateFn, Router } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const router:Router = new Router
  const storage = new LocalStorageService
  const user = storage.getStorage('activeUser')

  if (user === null) {
    console.log('Blocked for guard!')
    router.navigate([''])
    return false;

  } else {
    console.log('Authorizated for guard!')
    return true
  }
};
