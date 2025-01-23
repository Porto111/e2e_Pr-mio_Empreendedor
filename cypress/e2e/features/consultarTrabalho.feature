Feature: Validar a pagina de consulta

  Background: Usuario logado

  Scenario: Consultar trabalho existente através da pesquisa por nome
    Given que o usuario esta na pagina consultar trabalho
    When digitar o nome do trabalho desejado no campo pesquisar
    Then o trabalho apresentado na tela corresponde ao nome informado

  Scenario: Consultar trabalho inexistente através da pesquisa por nome
    Given que o usuario esta na pagina consultar trabalho
    When digitar o nome do trabalho desejado no campo pesquisar
    Then deve retornar a lista em branco com mensagem 'Não há dados'
