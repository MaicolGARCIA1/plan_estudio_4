function showIdentification() {
    // Crear el CSS
    const css = `
        form {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .form-label {
            font-weight: 600;
            color: #333;
        }

        .form-control {
            border-radius: 4px;
            border: 1px solid #ced4da;
            box-shadow: none;
        }

        .form-control:focus {
            border-color: #005b23;
            box-shadow: 0 0 0 0.2rem rgba(0, 91, 35, 0.25);
        }

        .btn {
            border-radius: 50px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn-secondary {
            background-color: #6c757d;
            color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
            background-color: #005b23;
            color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary:hover {
            background-color: #5a6268;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-primary:hover {
            background-color: #004d1a;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary:focus,
        .btn-primary:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(0, 91, 35, 0.25);
        }

        .mt-4 {
            margin-top: 1.5rem;
        }

        .mb-4 {
            margin-bottom: 1.5rem;
        }

        .text-right {
            text-align: right;
        }
    `;

    // Crear un elemento <style> y agregar el CSS
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Añadir el <style> al <head> del documento
    document.head.appendChild(style);

    // Crear el contenido del formulario
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">Identificación</h2>
            <form id="identification-form" method="POST" action="/identificaciones">
                @csrf
                <div class="row">
                    <div class="col-md-6 form-group mb-3">
                        <label for="facultad" class="form-label">Facultad</label>
                        <input type="text" name="facultad" class="form-control" id="facultad" placeholder="Facultad" required>
                    </div>
                    <div class="col-md-6 form-group mb-3">
                        <label for="programa" class="form-label">Programa</label>
                        <input type="text" name="programa" class="form-control" id="programa" placeholder="Programa" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group mb-3">
                        <label for="nombre-curso" class="form-label">Nombre del curso</label>
                        <input type="text" name="nombre_del_curso" class="form-control" id="nombre-curso" placeholder="Nombre del curso" required>
                    </div>
                    <div class="col-md-6 form-group mb-3">
                        <label for="elaborado-por" class="form-label">Elaborado por</label>
                        <input type="text" name="elaborado_por" class="form-control" id="elaborado-por" placeholder="Elaborado por" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group mb-3">
                        <label for="fecha-ultima-actualizacion" class="form-label">Fecha última actualización</label>
                        <input type="date" name="fecha_ultima_actualizacion" class="form-control" id="fecha-ultima-actualizacion" required>
                    </div>
                    <div class="col-md-6 form-group mb-3">
                        <label for="fecha-aprobacion" class="form-label">Fecha aprobación del Comité Curricular</label>
                        <input type="date" name="fecha_aprobacion_comite_curricular" class="form-control" id="fecha-aprobacion" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group mb-3">
                        <label for="idioma" class="form-label">Idioma</label>
                        <input type="text" name="idioma" class="form-control" id="idioma" placeholder="Idioma" required>
                    </div>
                    <div class="col-md-6 form-group mb-3">
                        <label for="codigo" class="form-label">Código</label>
                        <input type="text" name="codigo" class="form-control" id="codigo" placeholder="Código" required>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="goBack()">Volver</button>
                    <button type="button" class="btn btn-primary" onclick="showCreditType()">Siguiente</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    `;

    // Actualizar el contenido del elemento con ID 'content-section'
    document.getElementById('content-section').innerHTML = content;

    // Añadir evento de envío del formulario
    document.getElementById('identification-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = event.target;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Identificación guardada exitosamente.');
                form.reset();
            } else {
                alert('Error al guardar la identificación.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al guardar la identificación. Ver consola para detalles.');
        });
    });
}
