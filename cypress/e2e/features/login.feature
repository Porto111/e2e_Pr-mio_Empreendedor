Feature: Login
Funcionalidade realizar login no sistema Sabesp

  Scenario Outline: "<cenario>"
    Given eu acesse a aplicacao Sabesp
    When inserir meu usuario "<user>" e senha "<senha>"
    And clicar no botao acessar
    Then sou direcionado para a home logada

    Examples:
      | cenario           | user             | senha    |
      | login com sucesso | guisouza.solutis | uZE11O8Z |
