import { WebStorageStateStore, Log } from "oidc-client";
const local_url = 'localhost:4200';
const base_Url = 'https://localhost:44387';
const auth_Url = 'https://localhost:44388';

// export function oidc_confg() {
//   return {
//     oidc_config: {
//       authority: 'https://localhost:44388',
//       client_id: 'angular_spa',
//       redirect_uri: 'http://localhost:4200/callback.html',
//       post_logout_redirect_uri: 'http://localhost:4200/signout-callback.html',
//       response_type: "id_token token",
//       scope: "openid profile email api.read, api1",
//       filterProtocolClaims: true,
//       loadUserInfo: true,
//       automaticSilentRenew: true,
//       silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
//       userStore: () => new WebStorageStateStore({ store: window.localStorage })
//     }
//   }
// }

export function getUserStore() {
  return new WebStorageStateStore({ store: window.localStorage })
}
export const environment = {
  production: true,
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
