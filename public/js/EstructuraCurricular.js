function showCurricularStructure() {
    const content = `
        <h2 class="h4">Estructura Curricular</h2>
        <form>
            <div class="form-group">
                <label for="semestre">Semestre</label>
                <input type="text" class="form-control" id="semestre" placeholder="Ingrese Semestre">
            </div>
            <div class="form-group">
                <label for="prerrequisitos">Prerrequisitos</label>
                <input type="text" class="form-control" id="prerrequisitos" placeholder="Ingrese Prerrequisitos">
            </div>
            <div class="form-group">
                <label for="saberes-competencias">Saberes y Competencias Previas</label>
                <textarea class="form-control" id="saberes-competencias" rows="3" placeholder="Ingrese Saberes y Competencias Previas"></textarea>
            </div>
            <button type="button" class="btn btn-secondary" onclick="goBack()">Volver</button>
            <button type="button" class="btn btn-primary" onclick="showNextSection()">Siguiente</button>
        </form>
    `;
    document.getElementById('content-section').innerHTML = content;
}

function showNextSection() {
    // Aquí defines la lógica para mostrar la siguiente sección.
    // Por ejemplo:
    showEducationalPurposes(); // Llama a la función que muestra la siguiente sección.
}
