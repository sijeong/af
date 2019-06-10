import { WebStorageStateStore, Log } from "oidc-client";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const local_url = 'localhost:4200';
const base_Url = 'https://localhost:44387';
const auth_Url = 'https://localhost:44388';
export function getUserStore() {
  return new WebStorageStateStore({ store: window.localStorage })
}
export const environment = {
  production: false,
  oidc_conf: {
    oidc_config: {
      authority: 'https://localhost:44388',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/callback.html',
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback.html',
      response_type: "id_token token",
      scope: "openid profile email api.read, api1",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
      userStore: getUserStore()
    },
    log: {
      logger: console,
      level: Log.INFO
    }
  },
  base_Url: base_Url,
  auth_Url: auth_Url
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
