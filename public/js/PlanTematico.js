function showThematicPlan() {
    const content = `
        <h2 class="h4">Plan Temático</h2>
        <form>
            <div class="form-group">
                <label for="thematic-plan">Ingrese el plan temático con las actividades enumeradas</label>
                <textarea class="form-control" id="thematic-plan" rows="10" placeholder="Ingrese las actividades del plan temático, usando la numeración jerárquica (ej. 1, 1.1, 2, 2.1, ...)"></textarea>
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
    showEducationalMedia(); // Llama a la función que muestra la siguiente sección.
}
