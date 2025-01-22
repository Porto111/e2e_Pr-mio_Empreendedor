class ConsultarTrabalhoElements {
    pesquisarTrabalho = () => {return 'input[placeholder="Pesquisar"]'}
    ordenarInscricao = () => {return 'nz-table-sorters[ng-reflect-sort-directions="ascend,descend,"] span'.eq(0)}
    ordenarTitulo = () => {return 'span.ant-table-column-title'.eq(1)}
    ordenarTematica = () => {return 'span.ant-table-column-title'.eq(2)}
    ordenarCategoria = () => {return 'nz-table-sorters[ng-reflect-sort-directions="ascend,descend,"]'.eq(3)}
    ordenarStatus = () => {return 'span.ant-table-column-title'.eq(4)}
    btnVisualizarTrabalho = () => {return 'button[ng-reflect-title="Visualizar trabalho"]'.eq(0)}
    btnProximaPagina = () => {return 'li[ng-reflect-type="next"] button' }
    btnPaginaAnterior = () => {return 'li[title="Página anterior"] button' }
    defineQuantidadeDeItemApresentados = () => {return 'nz-select-item[ng-reflect-deletable="false"]'}

} export default ConsultarTrabalhoElements