/// <reference types="Cypress" />
import HomeUserElelements from "../elements/homeUser_elements.js"
import LoginElements from "../elements/login_elements.js"
import LoginPage from "./login_page.js"

const loginPage = new LoginPage
const homeElements = new HomeUserElelements
const loginElements = new LoginElements


class HomeUserPage {

    usuarioLogado (){
        const userName = 'guisouza.solutis';
        const password = 'uZE11O8Z';
        cy.visit('/login')
        cy.get(loginElements.inputUserName()).type(userName)
        cy.get(loginElements.inputPassword()).type(password)
        cy.get(loginElements.btnAcessar())
        
    }

    validarPopup(){
       // cy.contains('h3', 'title modal-title ant-typography').should('be.visible')
       cy.contains('h3' , '.modal-content > .title').should('be.visible')
    }

    fecharPopup (){
        cy.get(homeElements.closePopup()).click()
    }

    MsgPopup(){
        cy.get(homeElements.naoMostrarNovamente()).click()
    }

    datasImpontantes(){
        cy.get(homeElements.calendarioInfo()).click()
        cy.get(homeElements.closePopup()).click()
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
        cy.get(homeElements.administracaoMenu()).click()
    }

    menuDropAvaliadores(){
        cy.get(homeElements.menuAdmAvaliadores()).click()
    }

    menuDropConcursos(){
        cy.get(homeElements.menuAdmConcursos()).click()
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





} export default HomeUserPage