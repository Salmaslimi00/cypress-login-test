describe('Pratiquer intercept', () => { 
    it('Tester intercept', () => {
      // Visiter la page
      cy.visit('https://dummyapi.io/explorer');
  
      // Configurer l'interception
      cy.intercept('GET', '/data/va/post/60d21af267d0d8992e610b8d/comment?limit=10').as('comments');
  
      // Effectuer le clic pour déclencher la requête
      cy.get(':nth-child(3) > .flex > .text-white').click();
  
      // Attendre l'interception
      cy.wait('@comments', { timeout: 20000 }).then((intercept) => {
        // Afficher le contenu de l'interception dans la console
        console.log('Interception:', intercept);
  
        expect(intercept.response.statusCode).to.equal(200);
        expect(intercept.response.body).to.have.property('limit', 10);
      });
    });
  });
  