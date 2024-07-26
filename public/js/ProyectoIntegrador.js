function showCourseContributions() {
    const content = `
        <h2 class="h4">Aportes del Curso al Proyecto Integrador</h2>
        <form>
            <div class="form-group">
                <label for="skills-abilities">Seres y habilidades</label>
                <textarea class="form-control" id="skills-abilities" rows="3" placeholder="Ingrese los seres y habilidades aportados por el curso"></textarea>
            </div>
            <div class="form-group">
                <label for="articulation-strategies">Estrategias de articulación</label>
                <textarea class="form-control" id="articulation-strategies" rows="3" placeholder="Ingrese las estrategias de articulación del curso"></textarea>
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
    showThematicPlan(); // Llama a la función que muestra la siguiente sección.
}
