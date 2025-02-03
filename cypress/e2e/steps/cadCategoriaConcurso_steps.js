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
    cy.wait(3000)
});


Given(/^que o usuário acessou a tela de cadastro de categoria$/, () => {
	homeUserPage.fecharPopup()
    homeUserPage.admMenuDrop()
    cy.wait(3000)
    homeUserPage.menuDropConcursos()
    cadCategoriaConcurso.btnGerenciarConcurso()
});

Then(/^a tela deve exibir os campos 'Título', 'Periodo de Realização' e os botões 'Voltar' e 'Salvar alterações'$/, () => {
	//cadCategoriaConcurso.btnGerenciarConcurso()
    cy.contains('span', ' Adicionar Nova Categoria ').click()
});


Given(/^que o usuário está na tela de cadastro de categoria$/, () => {
	homeUserPage.fecharPopup()
    homeUserPage.admMenuDrop()
    cy.wait(1500)
    homeUserPage.menuDropConcursos()
    
});


When(/^preencher o titulo e o periodo de realização da nova categoria$/, () => {
    //cadCategoriaConcurso.btnGerenciarConcurso()
    //cy.wait(2000)
    cy.wait(1500)
    cadCategoriaConcurso.botaoPesqConcurso()
    cy.wait(3000)
    cadCategoriaConcurso.btnGerenciarConcursoFiltrado()
    cy.contains('span', ' Adicionar Nova Categoria ').click()
    cadCategoriaConcurso.novaCategoriaTitulo()
    cadCategoriaConcurso.categoriaDataInicio()
    cadCategoriaConcurso.categoriaDataFim()

});

When(/^clicar no botão 'Salvar alterações'$/, () => {
	cadCategoriaConcurso.submitNvCategoria()
    //cy.get('button[type="submit"]').click()
});

Then(/^a nova categoria é adicionada corretamente$/, () => {
	//Conversar com o dev, para entender comportamento da aplicaçao
});


When(/^clicar no botão 'Voltar'$/, () => {
	cadCategoriaConcurso.submitBtnVoltar()
});

Then(/^nenhuma alteração é realizada e a tela de listagem de categorias é apresentada$/, () => {
	cy.get('p.ant-empty-description').should('be.visible')
});



When(/^preencher o periodo de realização, não preencher o titulo da nova categoria$/, () => {
	cy.wait(1500)
    cadCategoriaConcurso.botaoPesqConcurso()
    cy.wait(3000)
    cadCategoriaConcurso.btnGerenciarConcursoFiltrado()
    cy.contains('span', ' Adicionar Nova Categoria ').click()
    cadCategoriaConcurso.categoriaDataInicio()
    cadCategoriaConcurso.categoriaDataFim()
    
});

When(/^clicar no botão 'Salvar alterações'$/, () => {
	cy.get('button[type="submit"]').click()
});

Then(/^a mensagem 'Campo obrigatório!' é apresentada$/, () => {
	cy.contains('div[role="alert"]', 'Campo obrigatório!')
});



When(/^preencher o 'titul'o, não preencher o 'periodo de realização' da nova categoria$/, () => {
	cy.wait(1500)
    cadCategoriaConcurso.botaoPesqConcurso()
    cy.wait(1500)
    cadCategoriaConcurso.btnGerenciarConcursoFiltrado()
    cy.contains('span', ' Adicionar Nova Categoria ').click()
    cadCategoriaConcurso.novaCategoriaTitulo()
});


Then(/^a mensagem 'Campo obrigatório!' é apresentada$/, () => {
	cy.contains('div[role="alert"]', 'Campo obrigatório!')
});



Given(/^que o concurso selecionado está no período de vigência$/, () => {
	homeUserPage.fecharPopup()
    homeUserPage.admMenuDrop()
    cy.wait(3000)
    homeUserPage.menuDropConcursos()
    cadCategoriaConcurso.btnGerenciarConcurso()
    cy.contains('span', ' Adicionar Nova Categoria ').click()
    cadCategoriaConcurso.novaCategoriaTitulo()
    cadCategoriaConcurso.categoriaDataInicio()
    cadCategoriaConcurso.categoriaDataFim()
});

When(/^o usuário tenta cadastrar a categoria$/, () => {
	cy.get('button[type="submit"]').click()
});

Then(/^o sistema exibe uma mensagem de erro informando que não é possível vincular uma categoria a um concurso em vigência$/, () => {
    
	cy.contains('font', 'Não foi possível adicionar a categoria informada. Tente novamente mais tarde.')
});

