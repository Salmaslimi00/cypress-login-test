describe('Test de requêtes avec JSONPlaceholder', () => {
  it('Devrait intercepter la requête GET et simuler une réponse', () => {
    // Intercepte la requête GET vers /posts
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 200,
      body: [
        { userId: 1, id: 1, title: 'Post Simulé 1', body: 'Ceci est un post simulé 1' },
        { userId: 1, id: 2, title: 'Post Simulé 2', body: 'Ceci est un post simulé 2' }
      ]
    }).as('getPosts');  // Alias de la requête interceptée

    // Simuler la requête dans le test
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      // Vérifie que la requête réussit
      expect(response.status).to.eq(200);
    });

    // Assure-toi que les données interceptées contiennent les titres simulés
    cy.wait('@getPosts').then((interception) => {
        cy.get('.post-list').should('contain', 'Post Simulé 1');
        cy.get('.post-list').should('contain', 'Post Simulé 2');
    });
  });
});
