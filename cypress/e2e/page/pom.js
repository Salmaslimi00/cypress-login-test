export class LoginPage {
    enterUsername(Username) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Username);
    }
    
    enterPassword(Password) { // Correction ici
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Password);
    }
    
    clickLogin() { // Correction ici
        cy.get('.oxd-button').click();
    }
}
