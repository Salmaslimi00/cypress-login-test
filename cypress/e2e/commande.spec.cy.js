Cypress.Commands.add('loginMicrosoft', () => {
    cy.visit('https://login.microsoftonline.com/');
  
    // Replace these with your actual login selectors and flow
    cy.get('input[type="email"]').type('test');
    cy.get('input[type="submit"]').click();
  
    cy.get('input[type="password"]').type('test', { log: false });
    cy.get('input[type="submit"]').click();
  
    cy.get('input[type="submit"]').click(); // Handle stay signed in button (if exists)
    
    // Add checks to ensure login is successful
    cy.url().should('include', 'my-account-page');  // Ensure login is successful
  });
  
  beforeEach(() => {
    cy.session('microsoft-login', () => {
      cy.loginMicrosoft();
    });
  });
  
  describe('My Test Suite', () => {
    beforeEach(() => {
      cy.session('microsoft-login', () => {
        cy.loginMicrosoft();
        console.log("test")
      });
    });
  
    it('should visit the authenticated page', () => {
      cy.visit('https://cardisdev2.crm4.dynamics.com/', {
        followRequest: true,
      });
    });
  });