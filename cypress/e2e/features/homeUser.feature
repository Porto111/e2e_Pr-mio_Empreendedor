Feature: User home page
Funcionalidade validar a pagina inicial do usuário

  Background: Usuario logado

  Scenario Outline: Tela inicial do usuario
    Given que o usuario fecha o popup informativo da tela inicial
    When a tela pincipal e apresentada contendo o texto "<titulo>"
    Then o para o regulamento em PDF "<link>" está disponivel

    Examples:
      | titulo                      | link                                             |
      | Sistema Prêmio Empreendedor | Regulamento do Prêmio Empreendedor 2024          |
      | Sistema Prêmio Empreendedor | Qualquer dúvida sobre o Prêmio Empreendedor 2024 |

  Scenario: Ocultar popup informativo
    Given o usuario clica na mensagem 'Nao mostrar novamente' no popup de informacoes
    When fechar o popup de informacoes
    And recarregar a pagina
    Then o popup de informacoes é apresentado

  Scenario: Validar icone calendario para apresentação do popup de informacoes
    Given que o usuario fecha o popup informativo da tela inicial
    When clicar no botão calendario
    Then o popup de informacoes é apresentado na tela

  Scenario: Validar administração de usuario
    Given o usuario clica na mensagem 'Nao mostrar novamente' no popup de informacoes
    When fechar o popup de informacoes
    And clicar no icone 'Administrador' o botao 'sair' é apresentado
    Then apos clicar no botao 'sair' e direcionado para home não logada

  Scenario: Navegar para a tela consultar trabalho
    Given que usuario esta na tela pincipal
    When clicar no titulo 'Consultar Trabalho'
    Then a pagina de consultas é apresentada

  Scenario: Navegar para a tela cadastrar trabalho
    Given que usuario esta na tela pincipal
    When clicar no titulo 'Cadastrar Trabalho'
    Then a pagina de cadastro é apresentada


  Scenario Outline: Validar o menu administração de concursos
    Given que o usuario clicou no menu 'Administracao'
    When selecionar uma das opções da "<lista>" apresentada
    Then sera direcionado para a pagina selecionada

    Examples:
      | lista                  |
      | Avaliadores            |
      | Reassociar Avaliadores |
      | Concursos              |
      | Datas e Liberações     |
      | Resultados             |
