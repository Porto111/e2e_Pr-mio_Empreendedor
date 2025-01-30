class CadCategoriaConcursoElements{
btnEditarConc = () => { return 'font', 'Editar Concurso'.eq(1) }
btnAdcCategoria = () => {return 'font', 'Adicionar Nova Categoria'.eq(1)}
inputTitulo = () => {return '.ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'}
inputDataInicioNvCat = () => {return 'input[placeholder="Data inicial"]'}
inputDataFimNvCat = () => {return 'input[placeholder="Data final"]'}
btnSalvarCat = () => {return 'font', 'Salvar Alterações'.eq(1)}
btnVoltar = () => {return '.ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn:nth-child(1) > .ng-star-inserted'}
btnVisualizar = () => {return ':nth-child(1) > :nth-child(5) > .ant-btn-group > [ng-reflect-disabled="false"] > .anticon'}
btnVisConcFiltrado = () => {return 'button[ng-reflect-title="Gerenciar Concurso"]'}
btnPesqConcurso = () => {return 'input[placeholder*="Exemplo: Prêmio Empreendedor "]' }
} export default CadCategoriaConcursoElements
