/// <reference types="Cypress" />
import LoginPage from "../e2e/pages/login_page";

const loginPage = new LoginPage();

before(() => {
  // Executa o login uma vez antes de todos os testes
  cy.log("Realizando login antes de todos os testes");
  loginPage.visitPage();
  loginPage.fillLoginInfo('guisouza.solutis', 'uZE11O8Z');
  loginPage.submitLogin();
  cy.wait(5000); // Aguarda o carregamento da página após o login
});
