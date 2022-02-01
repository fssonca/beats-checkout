/// <reference types="cypress" />

describe("select product and go to the next step", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("select red headphone and go to the next step", () => {
    cy.get('[title="Beats Solo3 Wireless On-Ear Headphones - Red"]').click();

    cy.get('[data-testid="product-name"]').should(
      "have.text",
      "Beats Solo3 Wireless On-Ear Headphones - Red"
    );

    cy.get('[data-testid="product-name"]').should(
      "have.text",
      "Beats Solo3 Wireless On-Ear Headphones - Red"
    );

    cy.get("button")
      .contains(/next step: delivery details/i)
      .click();

    cy.get("div").contains("Delivery Information").should("be.visible");
  });
});

describe("test delivery details form", () => {
  it("bad path - putting incorrect info doesnt enable submit button", () => {
    // go to the next step

    cy.get("div").contains("Delivery Information").should("be.visible");
    cy.get("input[name='firstName']").type("Fernando");
    cy.get("input[name='lastName']").type("sousa");

    //put an email invalid and show an error message
    cy.get("input[name='email']").type("aaa2gmail.com");
    cy.get("input[name='email']").blur();
    cy.contains(/Type a valid email/i).should("be.visible");
  });
});
