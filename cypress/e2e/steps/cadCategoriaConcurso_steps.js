/// <reference types ="Cypress"/>

import HomeUserPage from "../pages/homeUser_page";
import CadCategoriaConcursoPage from "../pages/cadCategoriaConcurso_page";

const homeUserPage = new HomeUserPage
const cadCategoriaConcurso = new CadCategoriaConcursoPage


Given(/^que o usuário acessou o menu 'Administração > Concurso'.$/, () => {
	homeUserPage.fecharPopup()
    homeUserPage.admMenuDrop()
    cy.wait(3000)
    homeUserPage.menuDropConcursos()
    
});

When(/^clicar no botão 'Gerenciar concurso'$/, () => {
    cy.wait(3000)
	cadCategoriaConcurso.btnGerenciarConcurso()
});

Then(/^a tela de gerenciamento é apresentada$/, () => {
	cy.contains('nz-page-header-title', ' Gerenciar Concurso').should('be.visible')
});

Then(/^os botões 'Editar Concurso' e '+ Adicionar Categoria' estão habilitados$/, () => {
	cy.contains('span', ' Editar Concurso ').should('be.visible')
    cy.contains('span', ' Adicionar Nova Categoria ').should('be.visible')
});




