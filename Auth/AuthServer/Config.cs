using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace AuthServer
{
    public class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("resourceapi", "Resource API")
                {
                    Scopes = {new Scope("api.read")}
                }
                //new ApiResource {
                //    Name = "API 1",
                //    DisplayName = "Custom API",
                //    Description = "Custom API Access",
                //    UserClaims = new List<string> { "role" },
                //    ApiSecrets = new List<Secret> { new Secret ("scopeSecret".Sha256 ()) },
                //    Scopes = new List<Scope> {
                //        new Scope ("api1")
                //        }
                //    }
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new[]
            {
                new Client {
                    RequireConsent = false,
                    ClientId = "angular_spa",
                    ClientName = "Avatar",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    //AllowedScopes = new List<string>
                    //{
                    //    IdentityServerConstants.StandardScopes.OpenId,
                    //    IdentityServerConstants.StandardScopes.Profile,
                    //    IdentityServerConstants.StandardScopes.Email,
                    //    "role",
                    //    "api.read"
                    //},
                    AllowedScopes = { "openid", "profile", "email", "api.read", "api1" },
                    RedirectUris = {"http://localhost:4200/callback.html"},
                    PostLogoutRedirectUris = {"http://localhost:4200/signout-callback.html"},
                    AllowedCorsOrigins = {"http://localhost:4200"},
                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 3600
                }
                //new Client {
                //ClientId = "ng-oidc-client-identity",
                //ClientName = "Example client for ng-oidc-client and IdentityServer 4",
                //AllowedGrantTypes = GrantTypes.Implicit,
                //AllowedScopes = new List<string> {
                //    IdentityServerConstants.StandardScopes.OpenId,
                //    IdentityServerConstants.StandardScopes.Profile,
                //    IdentityServerConstants.StandardScopes.Email,
                //    "role",
                //    "api1"
                //},
                //AllowedCorsOrigins = new List<string> { "http://localhost:4200" },
                //RedirectUris = new List<string> {
                //    "http://localhost:4200/callback.html",
                //    "http://localhost:4200/renew-callback.html"
                //},
                //PostLogoutRedirectUris = new List<string> { "http://localhost:4200/signout-callback.html" },
                //AllowAccessTokensViaBrowser = true,
                //AllowOfflineAccess = true,
                //AccessTokenLifetime = 120, // two minutes
                //RequireConsent = false
                //}
            };
        }
    }
}
