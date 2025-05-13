describe('tester le site amazon',()=>{
    beforeEach(() => {
        cy.session('amazonnn', () => {
          cy.visit('https://www.amazon.com');
          cy.get('#nav-link-accountList-nav-line-1').click();
          cy.get('#createAccountSubmit').click();
          cy.get('#ap_customer_name').type('salmaaaaa');
          cy.get('#ap_email').type('slimi.s.fst@uhp.ac.ma');
          cy.get('#ap_password').type('salma.slimi.1998@gmail.com');
          cy.get('#ap_password_check').type('salma.slimi.1998@gmail.com');
          cy.get('#continue').click()


        }, { cacheAcrossSpecs: true });
      });
      it('login',()=>{
        cy.contains('Solve this puzzle to protect your account').should('be.visible');

      })
})