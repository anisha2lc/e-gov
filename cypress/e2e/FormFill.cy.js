/* eslint-disable no-undef */
describe("Contract Generate Flow", () => {
  let apiURL = null;

  before(() => {
    cy.getApiUrl().then((url) => (apiURL = url));
  });

  before(() => {
    cy.visit(Cypress.env("appUrl"));
  });

  it("generates a contract after scanning the template file", () => {
    cy.get('[data-cy="Email Address"]').should("be.visible");
    cy.get('[data-cy="Password"]').should("be.visible");

    cy.get("form").within(() => {
      cy.get('input[name="Email Address"]').type("anihsa02@gmail.com");
      cy.get('input[name="Password"]').type("anisha02");
    });

    cy.get('[data-cy="form-submit"]').should("be.visible");

    cy.intercept("PATCH", `${apiURL}/template_files/replace_fields`, (req) => {
      req.reply({ fixture: "contractFormData/formInputs" });
    }).as("replaceFormFields");

    cy.get('[data-cy="form-submit"]').click();

    cy.get('[data-cy="country-logo"]').should("be.visible");

    cy.get('[data-cy="register"]').should("be.visible").click();

    cy.get('[data-cy="register-birth"]').should("be.visible").click();

    cy.get('[data-cy="birth-registration"]').should("be.visible");

    cy.get("form").within(() => {
      cy.get('input[name="fullname"]').type("Samarpan Thapa");
      cy.get('input[name="dob"]').type("2000/08/02");
      cy.get('input[name="district"]').type("Kathmandu");
      cy.get('input[name="municipality"]').type("Municipality");
      cy.get('input[name="mothers_name"]').type("Seema Risal");
      cy.get('input[name="fathers_name"]').type("Arpan Thapa");
      cy.get('input[name="contact"]').type("9860939905");
    });

    cy.get('[data-cy="save-button"]').click();

    cy.contains("Submitted Successfully").should("be.visible");

    cy.wait(3000);

    cy.get('[data-cy="redirect"]').should("be.visible").click();

    cy.get('[data-cy="show-details"]').should("be.visible").click();

    cy.get('[data-cy="birth-details"]').should("be.visible").click();

    cy.get('[data-cy="back-btn"]').should("be.visible").click();

    cy.get('[data-cy="country-logo"]').should("be.visible");
  });
});
