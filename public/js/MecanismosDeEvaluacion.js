function showEvaluationMechanisms() {
    const content = `
        <h2 class="h4">Mecanismos de Evaluación</h2>
        <form>
            <div class="form-group">
                <label for="learning-outcomes">Resultados de Aprendizaje</label>
                <textarea class="form-control" id="learning-outcomes" rows="3" placeholder="Ingrese los resultados de aprendizaje"></textarea>
            </div>
            <div class="form-group">
                <label for="evaluation-mechanisms">Mecanismos de Evaluación</label>
                <textarea class="form-control" id="evaluation-mechanisms" rows="3" placeholder="Ingrese los mecanismos de evaluación"></textarea>
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
    showEvaluationInstruments(); // Llama a la función que muestra la siguiente sección.
}
