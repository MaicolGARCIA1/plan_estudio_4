function showEducationalMedia() {
    const content = `
        <h2 class="h4">Medios Educativos</h2>
        <form>
            <div class="form-group">
                <label for="resource-type">Tipo de Recurso</label>
                <textarea class="form-control" id="resource-type" rows="3" placeholder="Ingrese el tipo de recurso educativo"></textarea>
            </div>
            <div class="form-group">
                <label for="location-convention">Ubicación o Convenio</label>
                <textarea class="form-control" id="location-convention" rows="3" placeholder="Ingrese la ubicación o convenio del recurso educativo"></textarea>
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
    showSupportMaterials(); // Llama a la función que muestra la siguiente sección.
}
