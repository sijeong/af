import { WebStorageStateStore } from "oidc-client";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oidc_conf: {
    oidc_config: {
      authority: 'https://localhost:44385',
      client_id: 'ng-oidc-client-identity',
      response_type: 'id_token token',
      scope: 'openid profile offline_access api1',
      redirect_uri: 'http://localhost:4200/callback.html',
      silent_redirect_uri: 'http://localhost:4200/renew-callback.html',
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback.html',
      accessTokenExpiringNotificationTime: 10,
      automaticSilentRenew: true,
      userStore: () => new WebStorageStateStore({ store: window.localStorage })
    }
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
