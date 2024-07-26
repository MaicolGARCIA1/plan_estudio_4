function showConsistencyCurricular() {
    const content = `
        <h2 class="h4">Consistencia Curricular</h2>
        <form>
            <div class="form-group">
                <label for="consistency-type">Selecciona el tipo de consistencia curricular:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="consistencyType" id="horizontal" value="horizontal">
                    <label class="form-check-label" for="horizontal">
                        Horizontal
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="consistencyType" id="vertical" value="vertical">
                    <label class="form-check-label" for="vertical">
                        Vertical
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="consistencyType" id="transversal" value="transversal">
                    <label class="form-check-label" for="transversal">
                        Transversal
                    </label>
                </div>
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
    showCourseContributions(); // Llama a la función que muestra la siguiente sección.
}
