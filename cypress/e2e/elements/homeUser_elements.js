class HomeElelements{

    closePopup = () => {return 'svg[data-icon="close"]'}
    regulamentoLink = () => {return 'a', 'Regulamento do Prêmio Empreendedor 2024'}
    linkDuvida = () => {return 'a[href="https://ch-atende.sabesp.com.br"]'}
    naoMostrarNovamente = () => {return 'input[type="checkbox"]'}
    calendarioInfo = () => {return 'svg[data-icon="calendar"]'}
    userMenu = () => {return 'span[data-testid="user-name"]'}
    telaPrincipal = () => {return 'a[data-testid="home"]'} 
    telaConsultarTrabalho = () => {return 'a[data-testid="list-works"]'}
    telaCadastrarTrabalho = () => {return 'a[data-testid="register-work"]'}
    administracaoMenu = () => {return 'span', 'Administração'}
    menuAdmAvaliadores = () => {return 'a[data-testid="evaluators"]'}
    menuAdmReatAvaliadores = () => {return 'a[data-testid="reassociate-evaluator"]'}
    menuAdmConcursos = () => {return 'a[data-testid="contests-management"]'}
    menuAdmDataLiberacao = () => {return 'a[data-testid="contest-administration"]'}
    menuAdmResultados = () => {return 'a[data-testid="results"]'}
    popupHeader = () => {return 'h3.modal-title'}
    btnSair = () => { return 'li.ant-dropdown-menu-item'}
} export default HomeElelements