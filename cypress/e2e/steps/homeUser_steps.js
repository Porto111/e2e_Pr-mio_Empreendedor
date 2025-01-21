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
	
});

Then(/^a tela pincipal e apresentada$/, () => {
	cy.contains('h2', 'Sistema Prêmio Empreendedor')
});



// Validando tela principal

Given(/^que o usuario fecha o popup informativo da tela inicial$/, () => {
    homeUserPage.fecharPopup()
	
});

When(/^a tela pincipal e apresentada contendo o texto "([^"]*)"$/, (titulo) => {
	console.log(titulo);
    homeUserPage.validarUserHome()
	
});

Then(/^o para o regulamento em PDF "([^"]*)" está disponivel$/, (link) => {
	console.log(link);
	homeUserPage.pdfRegulamento()
});

Then(/^o para o regulamento em PDF "([^"]*)" está disponivel$/, (link) => {
	console.log(link);
	homeUserPage.duvidaLink()
});


Given(/^o usuario clica na mensagem 'Nao mostrar novamente' no popup de informacoes$/, () => {
	homeUserPage.MsgPopup()
});


When(/^fechar o popup de informacoes$/, () => {
	homeUserPage.fecharPopup()
});

When(/^recarregar a pagina$/, () => {
	cy.reload
});

Then(/^o popup de informacoes é apresentado$/, () => {
	homeUserPage.validarUserHome()
});


When(/^clicar no botão calendario$/, () => {
	homeUserPage.datasImpontantes()
});

Then(/^o popup de informacoes é apresentado na tela$/, () => {
	cy.wait(3000)
	homeUserPage.fecharPopup()
});



When(/^clicar no icone 'Administrador' o botao 'sair' é apresentado$/, () => {
	homeUserPage.menuUsuario()
});

Then(/^apos clicar no botao 'sair' e direcionado para home não logada$/, () => {
	homeUserPage.clickBtnSair()
	cy.contains('p', ' Para realizar o login utilize o usuário e senha da Sabesp')
});

