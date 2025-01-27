Feature: Cadastrar categoria para concurso

  Background:
Usuario autenticado como administrador na plataforma, acessando o menu 'Administração > Concurso'.

  Scenario: Acessar a tela de cadastro de categoria
    Given que o usuário acessou o menu 'Administração > Concurso'.
    When clicar no botão 'Gerenciar concurso'
    Then a tela de gerenciamento é apresentada
    

  Scenario: Exibir os campos obrigatórios na tela de cadastro
    Given que o usuário acessou a tela de cadastro de categoria
    Then a tela deve exibir os campos 'Título', 'Periodo de Realização' e os botões 'Voltar' e 'Salvar alterações'

  Scenario: Cadastrar a categoria com sucesso
    Given que o usuário está na tela de cadastro de categoria
    When preencher o titulo e o periodo de realização da nova categoria
    And clicar no botão 'Salvar alterações'
    Then a nova categoria é adicionada corretamente

  Scenario: Clicar no botão 'Voltar' cadastrar a categoria
    Given que o usuário está na tela de cadastro de categoria
    When preencher o titulo e o periodo de realização da nova categoria
    And clicar no botão 'Voltar'
    Then nenhuma alteração é realizada e a tela de listagem de categorias é apresentada

  Scenario: Cadastrar categoria um concurso com 'titulo' vazio
    Given que o usuário está na tela de cadastro de categoria
    When preencher o periodo de realização, não preencher o titulo da nova categoria
    And clicar no botão 'Salvar alterações'
    Then a mensagem 'Campo obrigatório!' é apresentada

  Scenario: Cadastrar categoria um concurso com 'periodo de realização' vazio
    Given que o usuário está na tela de cadastro de categoria
    When preencher o 'titul'o, não preencher o 'periodo de realização' da nova categoria
    And clicar no botão 'Salvar alterações'
    Then a mensagem 'Campo obrigatório!' é apresentada

  Scenario: Impedir a vinculação de categoria a concurso em vigência
    Given que o concurso selecionado está no período de vigência
    When o usuário tenta cadastrar a categoria
    Then o sistema exibe uma mensagem de erro informando que não é possível vincular uma categoria a um concurso em vigência
