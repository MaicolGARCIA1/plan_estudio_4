<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Dashboard - Microcurrículo</title>
    <!-- AdminLTE CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css">
    <!-- FontAwesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap">
    <!-- Custom CSS -->
    <style>
        .main-header.navbar {
            background: linear-gradient(90deg, #ffffff, #cecece);
            color: white;
        }

        .main-sidebar.sidebar-dark-primary {
            background: linear-gradient(180deg, #005b23, #009933);
        }

        .main-sidebar .nav-link.active, 
        .main-sidebar .nav-link:hover {
            background-color: #005b23;
            color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .sidebar p {
            color: white;
        }

        [class*=sidebar-dark-] .sidebar a {
            color: white;
            transition: color 0.3s ease;
        }

        .brand-link, .user-panel .info, .brand-text, .nav-icon {
            color: white;
        }

        .brand-link {
            background: linear-gradient(180deg, #005b23, #009933);
            text-align: center;
        }

        .user-panel .image img {
            border: 2px solid #00796b;
        }

        .content-header {
            background-color: #e0f2f1;
        }

        .content-wrapper {
            background-color: #ffffff;
        }

        .nav-sidebar .nav-item .nav-link {
            border-radius: 10px;
            margin: 5px 0;
            padding: 10px;
            font-weight: 600;
        }

        .nav-sidebar .nav-item .nav-icon {
            margin-right: 10px;
        }

        .nav-sidebar .nav-item .nav-link i {
            font-size: 18px;
        }
        .historial-link {
            background-color: #005b23;
        color: #000000 !important; /* Texto negro */
        font-weight: bold; /* Texto en negrita */
        border-radius: 10px; /* Bordes redondeados */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
        transition: all 0.3s ease;
    }

    .historial-link:hover {
        background-color: #00000000 !important; /* Fondo más claro al pasar el mouse */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra más intensa */
    }
    </style>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <button id="helpButton" class="nav-link btn btn-info" onclick="showHelp()">
                        <i class="fas fa-question-circle"></i> Ayuda
                    </button>
                </li>
            </ul>
        </nav>
        
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
                <img src="https://cdn-icons-png.flaticon.com/128/942/942799.png" alt="Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Microcurriculo</span>
            </a>
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block" onclick="loadProfile()">Maicol García</a>
                    </div>
                </div>
                
                
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                            <a href="#" class="nav-link historial-link" onclick="showManageIdentification()">
                                <i class="nav-icon fas fa-history"></i>
                                <p>Historial</p>
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showIdentification()">
                                <i class="nav-icon fas fa-id-badge"></i>
                                <p>Identificación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showCreditType()">
                                <i class="nav-icon fas fa-credit-card"></i>
                                <p>Tipo de Crédito</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showCurricularStructure()">
                                <i class="nav-icon fas fa-sitemap"></i>
                                <p>Estructura Curricular</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showEducationalPurposes()">
                                <i class="nav-icon fas fa-bullseye"></i>
                                <p>Propósitos Formativos</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showCompetenciasEspecificas()">
                                <i class="nav-icon fas fa-tasks"></i>
                                <p>Competencias Específicas del Curso</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showGenericCompetencies()">
                                <i class="nav-icon fas fa-lightbulb"></i>
                                <p>Competencias Genéricas Transversales</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showConsistencyCurricular()">
                                <i class="nav-icon fas fa-book"></i>
                                <p>Consistencia Curricular</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showCourseContributions()">
                                <i class="nav-icon fas fa-project-diagram"></i>
                                <p>Aportes del Curso al Proyecto Integrador</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showThematicPlan()">
                                <i class="nav-icon fas fa-list-alt"></i>
                                <p>Plan Temático</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showEducationalMedia()">
                                <i class="nav-icon fas fa-chalkboard-teacher"></i>
                                <p>Medios Educativos</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showSupportMaterials()">
                                <i class="nav-icon fas fa-book-open"></i>
                                <p>Material de Apoyo</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showReadingPlan()">
                                <i class="nav-icon fas fa-book-reader"></i>
                                <p>Plan Lector</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showEvaluationMechanisms()">
                                <i class="nav-icon fas fa-clipboard-check"></i>
                                <p>Mecanismos de Evaluación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="showTeacherProfile()">
                                <i class="nav-icon fas fa-poll-h"></i>
                                <p>Instrumentos de Evaluación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-action="teacher-profile">
                                <i class="nav-icon fas fa-user-tie"></i>
                                <p>Perfil del Docente</p>
                            </a>
                        </li>

                        <!-- Dentro del Navbar o Sidebar -->

                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Contenido principal -->
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Microcurrículo</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <section id="content-section">
                        <h2 class="h4">Bienvenido al Dashboard de Microcurrículo</h2>
                        <p>En esta sección, puedes gestionar y revisar todos los aspectos relacionados con el microcurrículo. Utiliza el menú lateral para navegar a las diferentes secciones.</p>
                    </section>
                </div>
            </div>
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/adminlte.min.js"></script>

    <!-- Archivo JS personalizado -->
    <script src="js/PerfilUsuario.js"></script>
    <script src="js/identificacion.js"></script>
    <script src="js/Visualizar.js"></script>
    <script src="js/tipoCredito.js"></script>
    <script src="js/EstructuraCurricular.js"></script>
    <script src="js/PropositosFormativos.js"></script>
    <script src="js/CompetenciasEspecificas.js"></script>
    <script src="js/CompetenciasGenericas.js"></script>
    <script src="js/ConsistenciaCurricular.js"></script>
    {{-- <script src="js/showCourseContributions.js"></script> --}}
    <script src="js/ProyectoIntegrador.js"></script>
    <script src="js/PlanTematico.js"></script>
    <script src="js/MediosEducativos.js"></script>
    <script src="js/MaterialDeApoyo.js"></script>
    <script src="js/PlanLector.js"></script>
    <script src="js/MecanismosDeEvaluacion.js"></script>
    <script src="js/InstrumentosDeEvaluacion.js"></script>
    <script src="js/PerfilDocente.js"></script>
    <script src="js/ayuda.js"></script>

</body>
</html>
