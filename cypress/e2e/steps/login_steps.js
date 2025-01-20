/// <reference types="Cypress"/>
import LoginPage from "../pages/login_page";


const loginPage = new LoginPage

Given(/^eu acesse a aplicacao Sabesp$/, () => {
	loginPage.visitPage()
});

When(/^inserir meu usuario "([^"]*)" e senha "([^"]*)"$/, (user, password) => {
	//console.log(args1,args2);
    loginPage.fillLoginInfo(user, password)

	
});

When(/^clicar no botao acessar$/, () => {
    loginPage.submitLogin()
	
});

Then(/^sou direcionado para a home logada$/, () => {
	loginPage.closePopup()
});


When(/^fecho a janela de informações$/, () => {
	loginPage.closePopup()
});



