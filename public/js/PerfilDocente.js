// Tu función para mostrar el perfil del docente
function showTeacherProfile() {
    const content = `
        <h2 class="h4">Perfil del Docente</h2>
        <form>
            <div class="form-group">
                <label for="full-name">Nombre Completo</label>
                <input type="text" class="form-control" id="full-name" placeholder="Ingrese el nombre completo del docente">
            </div>
            <div class="form-group">
                <label for="academic-degree">Grado Académico</label>
                <input type="text" class="form-control" id="academic-degree" placeholder="Ingrese el grado académico del docente">
            </div>
            <div class="form-group">
                <label for="professional-experience">Experiencia Profesional</label>
                <textarea class="form-control" id="professional-experience" rows="3" placeholder="Ingrese una breve descripción de la experiencia profesional"></textarea>
            </div>
            <div class="form-group">
                <label for="specialization">Áreas de Especialización</label>
                <input type="text" class="form-control" id="specialization" placeholder="Ingrese las áreas de especialización del docente">
            </div>
            <div class="form-group">
                <label for="teaching-competencies">Competencias Docentes</label>
                <textarea class="form-control" id="teaching-competencies" rows="3" placeholder="Ingrese las competencias docentes del profesor"></textarea>
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
    showHelp(); // Llama a la función que muestra la siguiente sección.
}


