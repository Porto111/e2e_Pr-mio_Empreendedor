/// <reference types="Cypress"/>

import LoginPage from "../pages/login_page";
import HomeUserPage from "../pages/homeUser_page";
import ConsultarTrabalhoPage from "../pages/consultarTrabalho_page";


const loginPage = new LoginPage
const homeUserPage = new HomeUserPage
const consultarTrabalhoPage = new ConsultarTrabalhoPage



Given(/^que o usuario esta na pagina consultar trabalho$/, () => {
	homeUserPage.fecharPopup()
    homeUserPage.telaConsultarTrab()
});

When(/^digitar o nome do trabalho desejado no campo pesquisar$/, () => {
	consultarTrabalhoPage.pesquisarTrabalho()
    
});


Then(/^o trabalho apresentado na tela corresponde ao nome informado$/, () => {
	
});


Then(/^deve retornar a lista em branco com mensagem 'Não há dados'$/, () => {
	//cy.contains('font', 'Não há dados').eq(1)
});


When(/^clicar no titulo das "([^"]*)" da lista de trabalho$/, async (colunas) => {
	console.log(colunas);

    // Mapeamento das listas para suas respectivas ações
    const acoesPorColunas = {
        "Inscrição": [
            () => this.consultarTrabalhoPage.classTrabalhoInscricao()
        ],
        "Título": [
            () => this.consultarTrabalhoPage.classTrabalhoTitulo()
        ],
        "Temática": [
            () => this.consultarTrabalhoPage.classTrabalhoTematica()
        ],
        "Categoria": [
            () => this.consultarTrabalhoPage.classTrabalhoCategoria()
        ],
        "Status": [
            () => this.consultarTrabalhoPage.classTrabalhoStatus()
        ],
    };
});

Then(/^a lista é apresentada de acrodo com o filtro utlizado$/, () => {
	
});
