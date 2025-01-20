Feature: User home page
Funcionalidade validar a pagina inicial do usuário

  Scenario: Usuario logado
    Given o usuario realizou o login com credenciais validas
    When fechar o popup informativo
    Then a tela pincipal e apresentada
