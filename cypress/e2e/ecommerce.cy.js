describe('Tester un site e-commerce', () => { 
    beforeEach('Visiter le lien', () => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    it('Tester un site e-commerce', () => {
        // Vérifie que le champ username est visible et non désactivé
        cy.get('#user-name').should('be.visible').and('not.be.disabled').type('visual_user');
        cy.get('#password').should('be.visible').and('not.be.disabled').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
        cy.get('[data-test="product-sort-container"]').should('be.visible');
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)'); 
        cy.get('.inventory_item').first().contains('Sauce Labs Onesie');
        let previousPrice = -Infinity; // Initialiser à -Infinity
        cy.get('.inventory_item_price').each(($el) => {
            const priceText = $el.text(); // Récupérer le texte du prix
            const price = parseFloat(priceText.replace('$', '').replace(',', '').trim()); // Convertir en nombre

            // Vérifier que le prix est supérieur ou égal au prix précédent
            expect(price).to.be.greaterThan(previousPrice, `Le prix ${price} n'est pas supérieur au précédent ${previousPrice}`);
            previousPrice = price; // Mettre à jour le prix précédent
        
    });   
        
});         
    
});

