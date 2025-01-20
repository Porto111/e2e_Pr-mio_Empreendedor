/// <reference types="Cypress" />
import LoginElements from "../elements/login_elements.js"
import HomeUserElelements from "../elements/homeUser_elements.js"

const loginElements = new LoginElements
const homeElements = new HomeUserElelements

const url = Cypress.config('baseUrl')

class LoginPage {

    visitPage(){
        cy.visit(url)
    }

fillLoginInfo(userName, password){
    cy.get(loginElements.inputUserName()).type(userName)
    cy.get(loginElements.inputPassword()).type(password)
}

submitLogin(){
    cy.get(loginElements.btnAcessar()).click()
}

fecharPopup(){
    cy.get(homeElements.closePopup())
}

}export default LoginPage