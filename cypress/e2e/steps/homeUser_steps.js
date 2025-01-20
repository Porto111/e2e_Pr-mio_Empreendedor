/// <reference types="Cypress"/>

import LoginPage from "../pages/login_page";
import HomeUserPage from "../pages/homeUser_page";

const loginPage = new LoginPage
const homeUserPage = new HomeUserPage

Given(/^o usuario realizou o login com credenciais validas$/, () => {
	homeUserPage.usuarioLogado()
    cy.wait(20000)
});

When(/^fechar o popup informativo$/, () => {
	homeUserPage.fecharPopup()
});

Then(/^a tela pincipal e apresentada$/, () => {
	cy.contains('h2', 'Sistema Prêmio Empreendedor')
});



