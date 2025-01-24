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

    btnGerenciarConcurso(){
        cy.get(cadCategoriaConcurso.btnVisualizar()).click()
    }

    submitNvCategoria(){
        cy.get(cadCategoriaConcurso.btnSalvarCat).click()
    }

    btnNovaCategoria(){
        cy.get(cadCategoriaConcurso.btnAdcCategoria()).click()
    }

    btnEditarConcurso(){
        cy.get(cadCategoriaConcurso.btnEditarConc()).click()
    }

    novaCategoriaTitulo(){
        cy.get(cadCategoriaConcurso.inputTitulo()).type('')
    }

    categoriaDataInicio(){
        cy.get(cadCategoriaConcurso.inputDataInicioNvCat()).type('')
    }

    categoriaDataFim(){
        cy.get(cadCategoriaConcurso.inputDataFimNvCat).type('')
    }

    submitBtnVoltar(){
        cy.get(cadCategoriaConcurso.btnVoltar()).click()
    }






} export default CadCategoriaConcursoPage