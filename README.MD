# Testes de ponta a ponta com Cypress

Projeto de amostra para demonstrar testes de ponta a ponta (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Versão `2.34.1`)
- [Node.js](https://nodejs.org/en/) (Versão `v21.2.0`)
- [npm](Versão `9.8.0`)
- [Cucumber](https://www.npmjs.com/package/cypress-cucumber-preprocessor)(Versão `4.3.1`)
- [Mochawesome] (https://www.npmjs.com/package/cypress-mochawesome-reporter)(Versão `7.1.3`)
- [pdfkit](https://www.npmjs.com/package/pdfkit?activeTab=versions)(Versão `0.16.0`)
- [Puppeteer](https://pptr.dev/)(Versão `24.1.1`)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Configurando as variáveis ​​de ambiente

Antes de executar os testes, algumas variáveis ​​de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina os valores apropriados para todas as variáveis.

**Observação:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.

### Modo headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma viewport de desktop.

Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma viewport de tablet.

---

Feito com ❤️ por [Porto111](<(https://github.com/Porto111)>).