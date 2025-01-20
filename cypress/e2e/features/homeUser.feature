Feature: User home page
Funcionalidade validar a pagina inicial do usuário

  Background: Usuario logado

  Scenario Outline: Tela inicial do usuario
    Given que o usuario fecha o popup informativo da tela inicial
    When a tela pincipal e apresentada contendo o texto "<titulo>"
    Then o para o regulamento em PDF "<link>" está disponivel

    Examples:
      | titulo                      | link                                    |
      | Sistema Prêmio Empreendedor | Regulamento do Prêmio Empreendedor 2024 |
