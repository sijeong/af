﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Quickstart.UI;
using IdentityServer4.Test;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json.Serialization;

namespace ng_oidc_client_server {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddCors (options => {

                // this defines a CORS policy called "default"
                options.AddPolicy ("default", policy => {
                    policy
                        .SetIsOriginAllowedToAllowWildcardSubdomains ()
                        .WithOrigins ("http://localhost:4200")
                        .AllowAnyHeader ()
                        .AllowAnyMethod ()
                        .AllowCredentials ();
                });
            });
            // services.AddAuthentication (options => {
            //     options.DefaultAuthenticateScheme = "Bearer";
            //     options.DefaultChallengeScheme = "Bearer";
            //     options.DefaultForbidScheme = "Identity.Application";
            // }).AddJwtBearer (options => {
            //     options.Authority = "https://localhost:5001";
            //     options.RequireHttpsMetadata = false;
            //     options.Audience = "api1";
            // });

            services.AddAuthentication ()
                .AddIdentityServerAuthentication ("api", options => {
                    options.Authority = "https://localhost:5001";
                    // options.RequireHttpsMetadata = false;
                    options.ApiName = "API 1";
                    // options.Audience = "API 1";
                    // options.ApiSecret = "APISecret"; // enable for introspection

                });

            services.AddIdentityServer ()
                .AddInMemoryClients (Clients)
                .AddInMemoryIdentityResources (IdentityResources)
                .AddInMemoryApiResources (ApiResources)
                .AddTestUsers (TestUsers.Users)
                .AddDeveloperSigningCredential ();

            services.AddAuthorization (options => {

                options.AddPolicy ("api", policy => {
                    policy.RequireScope ("api1");
                });
            });

            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_1);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                app.UseHsts ();
            }

            app.UseCors ("default");
            app.UseAuthentication ();

            app.UseMvc ();
            app.UseIdentityServer ();
            app.UseStaticFiles ();
            app.UseHttpsRedirection ();
            app.UseMvc (routes => {
                routes.MapRoute (
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}"
                );
            });

        }

        public static List<Client> Clients = new List<Client> {
            new Client {
            ClientId = "ng-oidc-client-identity",
            ClientName = "Example client for ng-oidc-client and IdentityServer 4",
            AllowedGrantTypes = GrantTypes.Implicit,
            AllowedScopes = new List<string> {
            IdentityServerConstants.StandardScopes.OpenId,
            IdentityServerConstants.StandardScopes.Profile,
            IdentityServerConstants.StandardScopes.Email,
            "role",
            "api1"
            },
            AllowedCorsOrigins = new List<string> { "http://localhost:4200" },
            RedirectUris = new List<string> {
            "http://localhost:4200/callback.html",
            "http://localhost:4200/renew-callback.html"
            },
            PostLogoutRedirectUris = new List<string> { "http://localhost:4200/signout-callback.html" },
            AllowAccessTokensViaBrowser = true,
            AllowOfflineAccess = true,
            AccessTokenLifetime = 120, // two minutes
            RequireConsent = false
            }
        };

        public static IEnumerable<IdentityResource> IdentityResources = new List<IdentityResource> {
            new IdentityResources.OpenId (),
            new IdentityResources.Profile (),
            new IdentityResources.Email (),
            new IdentityResource {
            Name = "role",
            UserClaims = new List<string> { "role" }
            }
        };

        public static IEnumerable<ApiResource> ApiResources = new List<ApiResource> {
            new ApiResource {
            Name = "API 1",
            DisplayName = "Custom API",
            Description = "Custom API Access",
            UserClaims = new List<string> { "role" },
            ApiSecrets = new List<Secret> { new Secret ("scopeSecret".Sha256 ()) },
            Scopes = new List<Scope> {
            new Scope ("api1")
            }
            }
        };

    }

}