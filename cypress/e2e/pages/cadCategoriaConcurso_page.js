/// <reference types="Cypress" />

import HomeUserElelements from "../elements/homeUser_elements.js"
import CadCategoriaConcursoElements from "../elements/cadCategoriaConcurso_elements.js"

const homeElements = new HomeUserElelements
const cadCategoriaConcurso = new CadCategoriaConcursoElements

class CadCategoriaConcursoPage {

    acessarConcursos(){
        cy.get(homeElements.admMenuDrop()).click()
        cy.get(homeElements.menuAdmConcursos()).click()
    }

    


} export default CadCategoriaConcursoPage