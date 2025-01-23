/// <reference types="Cypress" />

import HomeUserElelements from "../elements/homeUser_elements.js"
import LoginElements from "../elements/login_elements.js"
import ConsultarTrabalhoElements from "../elements/consultarTrabalho_elements.js"

const loginElements = new LoginElements
const homeElements = new HomeUserElelements
const consultarTrabalho = new ConsultarTrabalhoElements


class ConsultarTrabalhoPage {

    pesquisarTrabalho(){
        cy.get(consultarTrabalho.pesquisarTrabalho()).click() 
        cy.get('manage-form-grid > .filter > .search-input-wrapper > .ant-input-affix-wrapper > .ant-input').type('hhhhh')
        cy.get('.search-input-wrapper > .ant-input-affix-wrapper > .ant-input-suffix > .anticon > svg').click() 
    }

    btnProxPagina(){
        cy.get(consultarTrabalho.btnProximaPagina()).click()
    }

    btnPaginaAnterior(){
        cy.get(consultarTrabalho.btnPaginaAnterior()).click()
    }

    quantidadeDeItenPorLista(){
        cy.get(consultarTrabalho.defineQuantidadeDeItemApresentados()).click()
    }

    classTrabalhoInscricao(){
        cy.get(consultarTrabalho.ordenarInscricao()).click()

    }

    classTrabalhoTitulo(){
        cy.get(consultarTrabalho.ordenarTitulo()).click()
    }

    classTrabalhoTematica(){
        cy.get(consultarTrabalho.ordenarTematica()).click()
        
    }

    classTrabalhoCategoria(){
        cy.get(consultarTrabalho.ordenarCategoria()).click()
        
    }

    classTrabalhoStatus(){
        cy.get(consultarTrabalho.ordenarStatus()).click()
    }

    btnVisualizarAvaDeTrabalho(){
        cy.get(consultarTrabalho.btnVisualizarTrabalho()).click()
    }

} export default ConsultarTrabalhoPage