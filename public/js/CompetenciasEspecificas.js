function showCompetenciasEspecificas() {
    const content = `
        <h2 class="h4">Competencias Específicas del Curso</h2>
        <form>
            <div class="form-group">
                <label for="competencias-especificas">Competencias Específicas</label>
                <textarea class="form-control" id="competencias-especificas" rows="3" placeholder="Ingrese competencias específicas"></textarea>
            </div>
            <div class="form-group">
                <label for="resultados-aprendizaje">Resultados de Aprendizaje</label>
                <textarea class="form-control" id="resultados-aprendizaje" rows="3" placeholder="Ingrese resultados de aprendizaje"></textarea>
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
    showGenericCompetencies(); // Llama a la función que muestra la siguiente sección.
}
