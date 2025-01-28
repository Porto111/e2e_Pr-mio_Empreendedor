class CadCategoriaConcursoElements{
btnEditarConc = () => { return 'app-manage-contest-section > .ant-page-header > .ant-page-header-heading > .ant-page-header-heading-extra > .ant-btn' }
btnAdcCategoria = () => {return 'app-manage-contest-categories-section > .ant-page-header > .ant-page-header-heading > .ant-page-header-heading-extra > .ant-btn'}
inputTitulo = () => {return 'input[formcontrolname="categoryName"]'}
inputDataInicioNvCat = () => {return 'input[placeholder="Dados iniciais"]'}
inputDataFimNvCat = () => {return 'input[placeholder="Dados finais"]'}
btnSalvarCat = () => {return 'button[type="submit"]'}
btnVoltar = () => {return 'div[ng-reflect-modal-ref="[object Object]"] button'.eq(0)}
btnVisualizar = () => {return ':nth-child(1) > :nth-child(5) > .ant-btn-group > [ng-reflect-disabled="false"] > .anticon'}
btnPesqConcurso = () => {return 'input[placeholder*="Exemplo: Prêmio Empreendedor "]' }
} export default CadCategoriaConcursoElements
