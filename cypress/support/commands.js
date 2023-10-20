/* eslint-disable no-undef */
// custom command to get api url
Cypress.Commands.add("getApiUrl", (endPoint = "defaultEndPoint") => {
  const apiURLs = Cypress.env("server");

  const url = apiURLs["baseUrl"] + apiURLs[endPoint];

  return cy.wrap(url);
});
