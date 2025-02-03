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

    btnGerenciarConcursoFiltrado(){
        cy.get(cadCategoriaConcurso.btnVisConcFiltrado()).click()
    }

    submitNvCategoria(){
        cy.get(cadCategoriaConcurso.btnSalvarCat()).click()
    }

    btnNovaCategoria(){
        cy.get(cadCategoriaConcurso.btnAdcCategoria()).click()
    }

    btnEditarConcurso(){
        cy.get(cadCategoriaConcurso.btnEditarConc()).click()
    }

    novaCategoriaTitulo(){
        cy.get(cadCategoriaConcurso.inputTitulo()).type('Teste01')
    }

    categoriaDataInicio(){
        cy.get(cadCategoriaConcurso.inputDataInicioNvCat()).type('02/02/2025')
    }

    categoriaDataFim(){
        cy.get(cadCategoriaConcurso.inputDataFimNvCat()).type('05/02/2025')
    }

    submitBtnVoltar(){
        cy.get('.ant-modal-content > .ant-modal-body > .ng-star-inserted > #edit-contest-form > .ant-row:nth-child(2)').click()
        cy.get(cadCategoriaConcurso.btnVoltar()).click()
    }

    botaoPesqConcurso(){
        cy.get(cadCategoriaConcurso.btnPesqConcurso()).type('Concurso D').click()
    }


} export default CadCategoriaConcursoPage