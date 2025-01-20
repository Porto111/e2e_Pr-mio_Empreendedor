Feature: User home page
Funcionalidade validar a pagina inicial do usuário

  Scenario: Usuario logado
    Given o usuario realizou o login com credenciais validas
    When a pagina inicial do usuario for apresentada com o popup informativo
    And fechar o popup informativo
    Then a tela pincipal e apresentada
