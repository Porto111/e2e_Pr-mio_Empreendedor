/// <reference types="Cypress" />
import LoginPage from "../e2e/pages/login_page";
import HomeUserPage from "../e2e/pages/homeUser_page";

const homeUserPage = new HomeUserPage();
const loginPage = new LoginPage();

beforeEach(() => {
  // Verifica se o usuário ainda está logado antes de cada teste
  cy.get('body').then(($body) => {
    if ($body.find('selector-para-verificar-se-esta-logado').length === 0) {
      // Se não estiver logado, faça o login novamente
      loginPage.visitPage();
      loginPage.fillLoginInfo('guisouza.solutis', 'uZE11O8Z');
      loginPage.submitLogin();
      cy.wait(5000);
     // homeUserPage.fecharPopup()

    }
  });
});