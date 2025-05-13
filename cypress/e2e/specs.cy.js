it ('my first test',()=>{
    cy.visit('www.trello.com')
    cy.contains('Get Trello for free').click()
    cy.get('#email').type('salma.slimi.1998@gmail.com')
    
})