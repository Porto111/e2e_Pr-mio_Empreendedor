class CadCategoriaConcursoElements{
btnEditarConc = () => { return 'button[ng-reflect-nz-type="primary"]'.eq(0) }
btnAdcCategoria = () => {return 'button[nztype="primary"]'.eq(1)}
inputTitulo = () => {return 'input[formcontrolname="categoryName"]'}
inputDataInicioNvCat = () => {return 'input[placeholder="Data inicial"]'}
inputDataFimNvCat = () => {return 'input[placeholder="Data final"]'}
btnSalvarCat = () => {return 'button[type="submit"]'}
btnVoltar = () => {return 'div[ng-reflect-modal-ref="[object Object]"] button'.eq(0)}

} export default CadCategoriaConcursoElements

