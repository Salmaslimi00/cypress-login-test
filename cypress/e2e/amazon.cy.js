describe('Tester le site Demoblaze', () => {
    beforeEach('Visiter le lien', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.fixture('loginData').then((data) => {
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label')
              .type(data.username);
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label')
              .type(data.password);
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        });
    });

    it('Login et passer une commande', () => {
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
        cy.get('#itemc').click();
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
        cy.get('.col-sm-12 > .btn').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });

        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();

        // Charger les données de commande et utiliser la commande passerCommande
        cy.fixture('loginData').then((data) => {
            cy.passerCommande(data.order); // Utilisation de la commande personnalisée
        });
    });
});
