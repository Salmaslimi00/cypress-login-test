describe('Tester un site e-commerce', () => { 
  beforeEach('Visiter le lien', () => {
      cy.visit('https://www.saucedemo.com/');
  });
  
  it('Se connecter et trier les produits', () => {
      // Se connecter
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Vérifier que l'on est sur la page d'inventaire
      cy.url().should('include', '/inventory.html');

      // Attendre que la liste d'inventaire soit visible
      cy.get('.inventory_list').should('be.visible');

      // Attendre un moment pour que les éléments soient chargés
      cy.wait(2000);

      // Vérifier la présence de l'élément de tri
      cy.get('[data-test="product_sort_container"]').should('be.visible');

      // Sélectionner l'option de tri par prix
      cy.get('[data-test="product_sort_container"]').select('Price (low to high)'); 

      // Vérifiez que le tri a été appliqué en récupérant le premier élément
      cy.get('.inventory_item').first().contains('Sauce Labs Onesie'); // Vérifiez si le produit est correct
  });   
});
