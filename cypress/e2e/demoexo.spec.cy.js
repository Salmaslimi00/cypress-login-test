describe('Exercice : Remplissage de Formulaire avec Cypress', () => {
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('Devrait se connecter avec un vrai utilisateur', () => {
      // Accéder à la page de login
      
      // Remplir le champ d'identifiant
      cy.get('#username').type('tomsmith');
  
      // Remplir le champ de mot de passe
      cy.get('#password').type('SuperSecretPassword!');
  
      // Cliquer sur le bouton de connexion
      cy.get('.radius').click();
  
      // Vérifier que l'utilisateur est connecté avec succès
      cy.contains('You logged into a secure area!').should('be.visible');
    });
    it('Devrait se connecter avec un faux utilisateur', () => {
        // Accéder à la page de login
    
        // Remplir le champ d'identifiant
        cy.get('#username').type('invalid');
    
        // Remplir le champ de mot de passe
        cy.get('#password').type('SecretPassword!');
    
        // Cliquer sur le bouton de connexion
        cy.get('.radius').click();
    
        // Vérifier que l'utilisateur est connecté avec succès
        cy.contains('Your username is invalid!').should('be.visible');
      });
  });
  it('Devrait se deconnecter', () => {
    // Accéder à la page de login
    cy.visit('https://the-internet.herokuapp.com/login')
    // Remplir le champ d'identifiant
    cy.get('#username').type('tomsmith');

    // Remplir le champ de mot de passe
    cy.get('#password').type('SuperSecretPassword!');

    // Cliquer sur le bouton de connexion
    cy.get('.radius').click();

    // Vérifier que l'utilisateur est connecté avec succès
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.get('.button').click();
    cy.contains('Login').should('be.visible');
  });

 