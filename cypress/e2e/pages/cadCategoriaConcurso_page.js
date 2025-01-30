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
        cy.get(cadCategoriaConcurso.btnSalvarCat).click()
    }

    btnNovaCategoria(){
        cy.get(cadCategoriaConcurso.btnAdcCategoria()).click()
    }

    btnEditarConcurso(){
        cy.get(cadCategoriaConcurso.btnEditarConc()).click()
    }

    novaCategoriaTitulo(){
        //cy.get(cadCategoriaConcurso.inputTitulo()).click()
        cy.get(cadCategoriaConcurso.inputTitulo()).type('Teste01')
        
        //cy.get('input[formcontrolname="categoryName"]').type('Teste Porto01')
        //cy.get('.ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('Teste01')
    }

    categoriaDataInicio(){
        //cy.get('input[placeholder="Data inicial"]').click()
        //cy.get('div[aria-disabled="false"] font').eq(15).click()
        cy.get(cadCategoriaConcurso.inputDataInicioNvCat()).type('02/02/2025')
    }

    categoriaDataFim(){
        //cy.contains('font', '13').eq(1)
        //cy.get('input[placeholder="Data final"]').click()
        cy.get(cadCategoriaConcurso.inputDataFimNvCat()).type('05/02/2025')
       //cy.get('.ant-modal-content > .ant-modal-body > .ng-star-inserted > #edit-contest-form > .ant-row:nth-child(2)').click()
    }

    submitBtnVoltar(){
        cy.get(cadCategoriaConcurso.btnVoltar()).click()
    }

    botaoPesqConcurso(){
        cy.get(cadCategoriaConcurso.btnPesqConcurso()).type('Concurso H').click()
    }


} export default CadCategoriaConcursoPage