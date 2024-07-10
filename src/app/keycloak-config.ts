  export const environment = {
  production: false,
  keycloak: {
    // Update these with your Keycloak configuration
    url: 'http://localhost:8080/auth',
    realm: 'TestRealm',
    clientId: 'stage_client',
    clientSecret: 'at0akDlSXvvWKWZJF8pWjQOa1Ljadip5',
    adminUsername:'mohamedkhlifi',
    adminPassword:'1122',
    bearerExcludedUrls: ['/login']
  }
};
