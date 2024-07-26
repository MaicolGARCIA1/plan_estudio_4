// js/ayuda.js

function showHelp() {
    const helpContent = `
        <div class="modal" id="helpModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Ayuda</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Bienvenido al dashboard del Microcurrículo. Aquí tienes una guía rápida para ayudarte a navegar:</p>
                        <ul>
                            <li><strong>Identificación:</strong> Añade o edita los detalles de identificación del curso.</li>
                            <li><strong>Tipo de Crédito:</strong> Define el tipo de crédito del curso.</li>
                            <li><strong>Estructura Curricular:</strong> Gestiona la estructura del curso.</li>
                            <li><strong>Propósitos Formativos:</strong> Especifica los propósitos formativos del curso.</li>
                            <li><strong>Competencias:</strong> Define las competencias específicas y genéricas del curso.</li>
                            <li><strong>Consistencia Curricular:</strong> Revisa la consistencia curricular del curso.</li>
                            <li><strong>Proyecto Integrador:</strong> Añade los aportes del curso al proyecto integrador.</li>
                            <li><strong>Plan Temático:</strong> Define el plan temático del curso.</li>
                            <li><strong>Medios Educativos:</strong> Gestiona los medios educativos del curso.</li>
                            <li><strong>Material de Apoyo:</strong> Añade material de apoyo para el curso.</li>
                            <li><strong>Plan Lector:</strong> Configura el plan lector del curso.</li>
                            <li><strong>Mecanismos de Evaluación:</strong> Define los mecanismos de evaluación del curso.</li>
                            <li><strong>Instrumentos de Evaluación:</strong> Configura los instrumentos de evaluación del curso.</li>
                            <li><strong>Perfil del Docente:</strong> Añade o edita el perfil del docente del curso.</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Crear un elemento para el modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = helpContent;
    document.body.appendChild(modalContainer);

    // Mostrar el modal
    $('#helpModal').modal('show');
}
