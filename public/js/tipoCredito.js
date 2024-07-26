
function showCreditType() {
    const content = `
        <h2 class="h4">Tipo de Crédito</h2>
        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="teorico">Teórico</label>
                        <input type="text" class="form-control" id="teorico" placeholder="Teórico">
                    </div>
                    <div class="form-group">
                        <label for="teorico-practico">Teórico-Práctico</label>
                        <input type="text" class="form-control" id="teorico-practico" placeholder="Teórico-Práctico">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="practico">Práctico</label>
                        <input type="text" class="form-control" id="practico" placeholder="Práctico">
                    </div>
                    <div class="form-group">
                        <label for="numero-creditos">Número de Créditos</label>
                        <input type="number" class="form-control" id="numero-creditos" placeholder="Número de Créditos">
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-secondary" onclick="goBack()">Volver</button>
            <button type="button" class="btn btn-primary" onclick="showCurricularStructure()">Siguiente</button>
        </form>
    `;
    document.getElementById('content-section').innerHTML = content;
}
