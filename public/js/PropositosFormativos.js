function showEducationalPurposes() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">Propósitos Formativos</h2>
            <form>
                <div class="form-group">
                    <label for="competencias-graduado" class="form-label">Competencias del graduado asociadas al curso</label>
                    <textarea class="form-control" id="competencias-graduado" rows="4" placeholder="Ingrese competencias" required></textarea>
                    <small class="form-text text-muted">Describe las competencias que los graduados deben haber desarrollado al finalizar el curso.</small>
                </div>
                <div class="form-group">
                    <label for="resultados-aprendizaje" class="form-label">Resultados de Aprendizaje del Graduado que se relacionan con el curso</label>
                    <textarea class="form-control" id="resultados-aprendizaje" rows="4" placeholder="Ingrese resultados de aprendizaje" required></textarea>
                    <small class="form-text text-muted">Indica los resultados de aprendizaje esperados que se relacionan con el curso.</small>
                </div>
                <div class="form-group">
                    <label for="aporte-curso" class="form-label">¿De qué manera el curso aportará al Perfil del Graduado?</label>
                    <textarea class="form-control" id="aporte-curso" rows="4" placeholder="Ingrese aportes del curso" required></textarea>
                    <small class="form-text text-muted">Explica cómo el curso contribuye al perfil general del graduado.</small>
                </div>
                <div class="form-group">
                    <label for="competencia-principal" class="form-label">Competencia Principal del curso</label>
                    <textarea class="form-control" id="competencia-principal" rows="4" placeholder="Ingrese competencia principal" required></textarea>
                    <small class="form-text text-muted">Define la competencia principal que el curso pretende desarrollar.</small>
                </div>
                <div class="form-group">
                    <label for="resultados-competencia" class="form-label">Resultados de aprendizaje asociados a la competencia principal del curso</label>
                    <textarea class="form-control" id="resultados-competencia" rows="4" placeholder="Ingrese resultados de competencia" required></textarea>
                    <small class="form-text text-muted">Especifica los resultados de aprendizaje relacionados con la competencia principal del curso.</small>
                </div>
                <div class="form-group d-flex justify-content-between mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showPreviousSection()">Volver</button>
                    <button type="button" class="btn btn-primary" onclick="showNextSection()">Siguiente</button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
}
function showNextSection() {
    // Aquí defines la lógica para mostrar la siguiente sección.
    // Por ejemplo:
    showCompetenciasEspecificas(); // Llama a la función que muestra la siguiente sección.
}
