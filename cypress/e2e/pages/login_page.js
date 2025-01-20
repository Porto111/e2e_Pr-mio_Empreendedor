/// <reference types="Cypress" />
import LoginElements from "../elements/login_elements.js"
import HomeElelements from "../elements/home_elements.js"

const loginElements = new LoginElements
const homeElements = new HomeElelements

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

closePopup(){
    cy.wait(10000)
    cy.get(homeElements.closePopup()).click()
}

}export default LoginPage