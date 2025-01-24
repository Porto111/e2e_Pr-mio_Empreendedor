/// <reference types="Cypress" />
import HomeUserElelements from "../elements/homeUser_elements.js"
import LoginElements from "../elements/login_elements.js"
import LoginPage from "./login_page.js"

const loginPage = new LoginPage
const homeElements = new HomeUserElelements
const loginElements = new LoginElements


class HomeUserPage {

    clickBtnSair(){
        cy.get(homeElements.btnSair()).click()
    }

    validarPopup(){
       // cy.contains('h3', 'title modal-title ant-typography').should('be.visible')
       cy.contains('h3' , '.modal-content > .title').should('be.visible')
    }

    validarUserHome(){
        cy.contains('h2', 'Sistema Prêmio Empreendedor').should('be.visible')
    }

    fecharPopup(){
        cy.get(homeElements.closePopup()).click()
    }

    MsgPopup(){
        cy.get(homeElements.naoMostrarNovamente()).click()
    }

    datasImpontantes(){
        cy.get(homeElements.calendarioInfo()).click()
    }

    telaConsultarTrab(){
        cy.get(homeElements.telaConsultarTrabalho()).click()
    }

    telaCadTrabalho(){
        cy.get(homeElements.telaCadastrarTrabalho()).click()
    }

    telaPincipal(){
        cy.get(homeElements.telaPrincipal()).click()
    }

    menuUsuario(){
        cy.get(homeElements.userMenu()).click()
    }

    admMenuDrop(){
        cy.get(selectAdminSpan()).click();
        //cy.contains('span', 'Administração')
        //cy.get('div[ng-reflect-nz-title="Administração"] span').eq(0)
        //cy.get('div[ng-reflect-mode="horizontal"] span').eq(0).click()
        //cy.get(homeElements.administracaoMenu()).click()
    }

    menuDropAvaliadores(){
        cy.get(homeElements.menuAdmAvaliadores()).click()
    }

    menuDropConcursos(){
        //cy.get(homeElements.menuAdmConcursos()).click()
        cy.contains('a', 'Concursos').click()
    }

    dropReassociarAvalaliadores(){
        cy.get(homeElements.menuAdmReatAvaliadores()).click()
    }

    dropAdmDataLiberacao(){
        cy.get(homeElements.menuAdmDataLiberacao()).click()
    }

    dropResultados(){
        cy.get(homeElements.menuAdmResultados()).click()
    }

    duvidaLink(){
        cy.get(homeElements.linkDuvida()).click()
    }

    pdfRegulamento(){
        cy.contains('a', 'Regulamento do Prêmio Empreendedor 2024').click()
    }
} export default HomeUserPage