import { WebStorageStateStore } from "oidc-client";

export const environment = {
  production: true,
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
