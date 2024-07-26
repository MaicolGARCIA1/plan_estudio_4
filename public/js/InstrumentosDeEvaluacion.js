function showEvaluationInstruments() {
    const content = `
        <h2 class="h4">Instrumentos de Evaluación</h2>
        <form>
            <div class="form-group">
                <label for="evaluation-rubric">Rúbrica de evaluación de desempeños (Esta rúbrica se desarrolla en el plan de aprendizaje)</label>
                <textarea class="form-control" id="evaluation-rubric" rows="3" readonly>Rúbrica de evaluación de desempeños (Esta rúbrica se desarrolla en el plan de aprendizaje)</textarea>
            </div>
            <button type="button" class="btn btn-secondary" onclick="showPreviousSection()">Volver</button>
            <button type="button" class="btn btn-primary" onclick="showNextSection()">Siguiente</button>
        </form>
    `;
    document.getElementById('content-section').innerHTML = content;
}
