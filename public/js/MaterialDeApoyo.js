function showSupportMaterials() {
    const content = `
        <h2 class="h4">Material de Apoyo</h2>
        <form>
            <div class="form-group">
                <label for="bibliography">Bibliografía</label>
                <textarea class="form-control" id="bibliography" rows="3" placeholder="Ingrese la bibliografía del material de apoyo"></textarea>
            </div>
            <div class="form-group">
                <label for="location">Ubicación</label>
                <textarea class="form-control" id="location" rows="3" placeholder="Ingrese la ubicación del material de apoyo"></textarea>
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
    showReadingPlan(); // Llama a la función que muestra la siguiente sección.
}
