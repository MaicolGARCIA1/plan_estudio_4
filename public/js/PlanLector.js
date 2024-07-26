function showReadingPlan() {
    const content = `
        <h2 class="h4">Plan Lector</h2>
        <form>
            <div class="form-group">
                <label for="required-readings">Textos de Lectura Obligatoria</label>
                <textarea class="form-control" id="required-readings" rows="3" placeholder="Ingrese los textos de lectura obligatoria"></textarea>
            </div>
            <div class="form-group">
                <label for="follow-up-strategies">Estrategias de Seguimiento</label>
                <textarea class="form-control" id="follow-up-strategies" rows="3" placeholder="Ingrese las estrategias de seguimiento"></textarea>
            </div>
         
            <button type="button" class="btn btn-secondary" onclick="showPreviousSection()">Volver</button>
            <button type="button" class="btn btn-primary" onclick="showNextSection()">Siguiente</button>
        </form>
    `;
    document.getElementById('content-section').innerHTML = content;
}
function showNextSection() {
    // Aquí defines la lógica para mostrar la siguiente sección.
    // Por ejemplo:
    showEvaluationMechanisms(); // Llama a la función que muestra la siguiente sección.
}
