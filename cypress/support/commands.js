Cypress.Commands.add('passerCommande', (order) => {
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label')
    .type(order.name);
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label')
    .type(order.country);
  cy.get(':nth-child(4) > .form-control-label').type(order.city);
  cy.get(':nth-child(5) > .form-control-label').type(order.creditCard);
  cy.get(':nth-child(6) > .form-control-label').type(order.month);
  cy.get(':nth-child(7) > .form-control-label').type(order.year);
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
});
