class CadCategoriaConcursoElements{
btnEditarConc = () => { return 'font', 'Editar Concurso'.eq(1) }
btnAdcCategoria = () => {return 'font', 'Adicionar Nova Categoria'.eq(1)}
inputTitulo = () => {return 'input[formcontrolname="categoryName"]'}
inputDataInicioNvCat = () => {return 'input[placeholder="Data inicial"]'}
inputDataFimNvCat = () => {return 'input[placeholder="Data final"]'}
btnSalvarCat = () => {return 'font', 'Salvar Alterações'.eq(1)}
btnVoltar = () => {return 'font', 'Voltar'.eq(1)}
btnVisualizar = () => {return ':nth-child(1) > :nth-child(5) > .ant-btn-group > [ng-reflect-disabled="false"] > .anticon'}
btnPesqConcurso = () => {return 'input[placeholder*="Exemplo: Prêmio Empreendedor "]' }
} export default CadCategoriaConcursoElements
