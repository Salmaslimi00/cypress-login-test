import { LoginPage } from "./page/pom"; 

const loginPage = new LoginPage(); // Correction ici

it('demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123'); // Correction ici
    loginPage.clickLogin(); // Correction ici
});
