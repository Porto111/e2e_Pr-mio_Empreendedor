/// <reference types="Cypress" />
import HomeUserElelements from "../elements/homeUser_elements.js"
import LoginPage from "./login_page.js"

const loginPage = new LoginPage
const homeElements = new HomeUserElelements

class HomeUserPage {

    usuarioLogado (){
        cy.get(loginPage.visitPage())
        cy.get(loginPage.fillLoginInfo())
        cy.get(loginPage.submitLogin())
    }

    validarPopup(){
        cy.contains('h3', 'title modal-title ant-typography').should('be.visible')
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