// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FormaTrack",
      social: {
        github: "https://github.com/migueldev2006/formatrackNodejs/tree/dev",
      },
      sidebar: [
        {
          label: "Inicio",
          autogenerate: { directory: "inicio" },
        },
        {
          label: "Manual Tecnico",
          items: [
            {
              label: "Areas",
              items: [
                { label: "Listar Áreas", slug: "areas/listarAreas" },
                { label: "Buscar Área", slug: "areas/buscarArea" },
                { label: "Registrar Área", slug: "areas/registrarArea" },
                { label: "Actualizar Área", slug: "areas/actualizarArea" },
                {
                  label: "Cambiar Estado del Área",
                  slug: "areas/cambiarEstadoDelArea",
                },
              ],
            },

            {
              label: "Categorías",
              items: [
                {
                  label: "Listar Categorías",
                  slug: "categorias/listarCategorias",
                },
                {
                  label: "Registrar Categoría",
                  slug: "categorias/registrarCategoria",
                },
                {
                  label: "Actualizar Categoría",
                  slug: "categorias/actualizarCategoria",
                },
                {
                  label: "Cambiar Estado de Categoría",
                  slug: "categorias/cambiarEstadoCategoria",
                },
                {
                  label: "Buscar Categoría",
                  slug: "categorias/buscarCategoria",
                },
              ],
            },
            {
              label: "Centros",
              items: [
                { label: "Listar Centros", slug: "centros/listarCentros" },
                { label: "Buscar Centro", slug: "centros/buscarCentro" },
                { label: "Registrar Centro", slug: "centros/registrarCentro" },
                {
                  label: "Actualizar Centro",
                  slug: "centros/actualizarCentro",
                },
                {
                  label: "Cambiar Estado de Centro",
                  slug: "centros/cambiarEstadoCentro",
                },
              ],
            },
            {
              label: "Elementos",
              items: [
                {
                  label: "Listar Elementos",
                  slug: "elementos/listarElementos",
                },
                { label: "Buscar Elemento", slug: "elementos/buscarElementos" },
                {
                  label: "Registrar Elemento",
                  slug: "elementos/registrarElementos",
                },
                {
                  label: "Actualizar Elemento",
                  slug: "elementos/actualizarElementos",
                },
                {
                  label: "Cambiar Estado del Elemento",
                  slug: "elementos/cambiarEstadoElementos",
                },
              ],
            },
            {
              label: "Fichas",
              items: [
                { label: "Listar Fichas", slug: "fichas/listarFichas" },
                { label: "Buscar Ficha", slug: "fichas/buscarFicha" },
                { label: "Registrar Ficha", slug: "fichas/registrarFicha" },
                { label: "Actualizar Ficha", slug: "fichas/actualizarFicha" },
                {
                  label: "Cambiar Estado de la Ficha",
                  slug: "fichas/cambiarEstadoFicha",
                },
              ],
            },
            {
              label: "Inventarios",
              items: [
                {
                  label: "Listar Inventarios",
                  slug: "inventario/listarInventarios",
                },
                {
                  label: "Buscar Inventario",
                  slug: "inventario/buscarInventarios",
                },
                {
                  label: "Registrar Inventario",
                  slug: "inventario/registrarInventario",
                },
                {
                  label: "Actualizar Inventario",
                  slug: "inventario/actualizarInventario",
                },
                {
                  label: "Cambiar Estado del Inventario",
                  slug: "inventario/cambiarEstadoInventario",
                },
              ],
            },
            {
              label: "Movimientos",
              items: [
                {
                  label: "Listar Movimientos",
                  slug: "movimientos/listarMovimientos",
                },
                {
                  label: "Buscar Movimientos",
                  slug: "movimientos/buscarMovimientos",
                },
                {
                  label: "Registrar Movimiento",
                  slug: "movimientos/registrarMovimiento",
                },
                {
                  label: "Actualizar Movimiento",
                  slug: "movimientos/actualizarMovimiento",
                },
                {
                  label: "Aceptar Movimiento",
                  slug: "movimientos/aceptarMovimiento",
                },
                {
                  label: "Cancelar Movimiento",
                  slug: "movimientos/cancelarMovimiento",
                },
              ],
            },
            {
              label: "Municipios",
              items: [
                {
                  label: "Listar Municipios",
                  slug: "municipios/listarMunicipios",
                },
                {
                  label: "Buscar Municipio",
                  slug: "municipios/buscarMunicipio",
                },
                {
                  label: "Registrar Municipio",
                  slug: "municipios/registrarMunicipio",
                },
                {
                  label: "Actualizar Municipio",
                  slug: "municipios/actualizarMunicipio",
                },
                {
                  label: "Cambiar Estado de Municipio",
                  slug: "municipios/cambiarEstadoMunicipio",
                },
              ],
            },
            {
              label: "Programas de Formación",
              items: [
                {
                  label: "Listar Programas de Formación",
                  slug: "programas-formacion/listarProgramas",
                },
                {
                  label: "Buscar Programa de Formación",
                  slug: "programas-formacion/buscarPrograma",
                },
                {
                  label: "Registrar Programa de Formación",
                  slug: "programas-formacion/registrarPrograma",
                },
                {
                  label: "Actualizar Programa de Formación",
                  slug: "programas-formacion/actualizarPrograma",
                },
                {
                  label: "Cambiar Estado del Programa de Formación",
                  slug: "programas-formacion/cambiarEstadoPrograma",
                },
              ],
            },
            {
              label: "Roles",
              items: [
                { label: "Listar Roles", slug: "roles/listarRoles" },
                { label: "Buscar Rol", slug: "roles/buscarRol" },
                { label: "Registrar Rol", slug: "roles/registrarRol" },
                { label: "Actualizar Rol", slug: "roles/actualizarRol" },
                {
                  label: "Cambiar Estado del Rol",
                  slug: "roles/estadoRol",
                },
              ],
            },
            {
              label: "Sedes",
              items: [
                { label: "Listar Sedes", slug: "sedes/listarSedes" },
                { label: "Buscar Sede", slug: "sedes/buscarSede" },
                { label: "Registrar Sede", slug: "sedes/registrarSede" },
                { label: "Actualizar Sede", slug: "sedes/actualizarSede" },
                {
                  label: "Cambiar Estado de la Sede",
                  slug: "sedes/cambiarEstadoSede",
                },
              ],
            },
            {
              label: "Sitios",
              items: [
                { label: "Listar Sitios", slug: "sitios/listarSitios" },
                { label: "Buscar Sitio", slug: "sitios/buscarSitio" },
                { label: "Registrar Sitio", slug: "sitios/registrarSitio" },
                { label: "Actualizar Sitio", slug: "sitios/actualizarSitio" },
                {
                  label: "Cambiar Estado del Sitio",
                  slug: "sitios/cambiarEstadoSitio",
                },
              ],
            },
            {
              label: "Tipos de Movimiento",
              items: [
                {
                  label: "Listar Tipos de Movimiento",
                  slug: "tipos-movimiento/listarTipoMovimiento",
                },
                {
                  label: "Buscar Tipos de Movimiento",
                  slug: "tipos-movimiento/buscarTipoMovimiento",
                },
                {
                  label: "Registrar Tipo de Movimiento",
                  slug: "tipos-movimiento/registrarTipoMovimiento",
                },
                {
                  label: "Actualizar Tipo de Movimiento",
                  slug: "tipos-movimiento/actualizarTipoMovimiento",
                },
                {
                  label: "Cambiar Estado del Tipo de Movimiento",
                  slug: "tipos-movimiento/cambiarEstadoTipoMovimiento",
                },
              ],
            },
            {
              label: "Tipos de Sitio",
              items: [
                {
                  label: "Listar Tipos de Sitio",
                  slug: "tipos-sitio/listarTiposSitio",
                },
                {
                  label: "Buscar Tipo de Sitio",
                  slug: "tipos-sitio/buscarTipoSitio",
                },
                {
                  label: "Registrar Tipo de Sitio",
                  slug: "tipos-sitio/registrarTipoSitio",
                },
                {
                  label: "Actualizar Tipo de Sitio",
                  slug: "tipos-sitio/actualizarTipoSitio",
                },
                {
                  label: "Cambiar Estado del Tipo de Sitio",
                  slug: "tipos-sitio/cambiarEstadoTipoSitio",
                },
              ],
            },
            {
              label: "Unidades de Medida",
              items: [
                {
                  label: "Listar Unidades de Medida",
                  slug: "unidades-medida/listarUnidadesMedida",
                },
                {
                  label: "Buscar Unidad de Medida",
                  slug: "unidades-medida/buscarUnidadMedida",
                },
                {
                  label: "Registrar Unidad de Medida",
                  slug: "unidades-medida/registrarUnidadMedida",
                },
                {
                  label: "Actualizar Unidad de Medida",
                  slug: "unidades-medida/actualizarUnidadMedida",
                },
                {
                  label: "Cambiar Estado de la Unidad de Medida",
                  slug: "unidades-medida/cambiarEstadoUnidadMedida",
                },
              ],
            },
            {
              label: "Usuario Ficha",
              items: [
                {
                  label: "Listar Asignaciones de Fichas a Usuarios",
                  slug: "usuario-ficha/listarUsuarioFicha",
                },
                {
                  label: "Registrar Asignación de Ficha a Usuario",
                  slug: "usuario-ficha/registrarUsuarioFicha",
                },
                {
                  label: "Actualizar Asignación de Ficha a Usuario",
                  slug: "usuario-ficha/actualizarUsuarioFicha",
                },
                {
                  label: "Buscar suario Ficha",
                  slug: "usuario-ficha/buscarUsuarioFicha",
                },
              ],
            },
            {
              label: "Permisos",
              items: [
                {
                  label: "Listar permisos",
                  slug: "permisos/listarPermisos",
                },
                {
                  label: "Registrar permisos",
                  slug: "permisos/registrarPermiso",
                },
                {
                  label: "Actualizar permisos",
                  slug: "permisos/actualizarPermiso",
                },
                {
                  label: "Buscar permiso",
                  slug: "permiso/buscarPermiso",
                },
              ],
            },
            {
              label: "Rol-Permiso",
              items: [
                {
                  label: "Listar Rol-Permiso",
                  slug: "rol-permiso/listarRolPermiso",
                },
                {
                  label: "Registrar Rol-Permiso",
                  slug: "rol-permiso/registrarRolPermiso",
                },
                {
                  label: "Actualizar Rol-Permiso",
                  slug: "rol-Permisos/actualizarRolPermiso",
                },
                {
                  label: "Buscar Rol-Permiso",
                  slug: "rol-permiso/buscarRolPermiso",
                },
                {
                  label: "Estado Rol-Permiso",
                  slug: "rol-permiso/EstadoRolPermiso",
                },
              ],
            },
            {
              label: "Usuarios",
              items: [
                { label: "Listar Usuarios", slug: "usuarios/listarUsuarios" },
                { label: "Buscar Usuario", slug: "usuarios/buscarUsuario" },
                {
                  label: "Registrar Usuario",
                  slug: "usuarios/registrarUsuario",
                },
                {
                  label: "Actualizar Usuario",
                  slug: "usuarios/actualizarUsuario",
                },
                {
                  label: "Cambiar Estado de Usuario",
                  slug: "usuarios/cambiarEstadoUsuario",
                },
                { label: "Iniciar Sesión", slug: "usuarios/login" },
                {
                  label: "Recuperar Contraseña",
                  slug: "usuarios/recuperarContraseña",
                },
                {
                  label: "Registrar Usuarios Masivamente",
                  slug: "usuarios/registroMasivo",
                },
                {
                  label: "Reestablecer contraseña",
                  slug: "usuarios/reestablecer-contrasena",
                },
                {
                  label: "Obtener Perfil del Usuario",
                  slug: "usuarios/perfilUsuario",
                },
                {
                  label: "Actualizar Perfil",
                  slug: "usuarios/actualizarPerfil",
                },
              ],
            },
            {
              label: "Rutas",
              items: [
                { label: "Registrar Ruta", slug: "rutas/registrarRuta" },
                { label: "Actualizar Ruta", slug: "rutas/actualizarRuta" },
                {
                  label: "Cambiar Estado de la Ruta",
                  slug: "rutas/cambiarEstadoRuta",
                },
                { label: "Listar Rutas", slug: "rutas/listarRutas" },
                { label: "Buscar Ruta", slug: "rutas/buscarRuta" },
              ],
            },
            {
              label: "Modulos",
              items: [
                { label: "Registrar Modulo", slug: "modulos/registrarModulo" },
                {
                  label: "Actualizar Modulo",
                  slug: "modulos/actualizarModulo",
                },
                {
                  label: "Cambiar Estado del Modulo",
                  slug: "modulos/cambiarEstadoModulo",
                },
                { label: "Listar Modulos", slug: "modulos/listarModulos" },
                { label: "Buscar Modulo", slug: "modulos/buscarModulo" },
              ],
            },
            {
              label: "Caracteristicas",
              items: [
                {
                  label: "Registrar Caracteristica",
                  slug: "caracteristicas/registrarCaracteristica",
                },
                {
                  label: "Actualizar Caracteristica",
                  slug: "caracteristicas/actualizarCaracteristica",
                },
                {
                  label: "Listar Caracteristicas",
                  slug: "caracteristicas/listarCaracteristicas",
                },
                {
                  label: "Buscar Caracteristica",
                  slug: "caracteristicas/buscarCaracteristica",
                },
              ],
            },
          ],
        },
        {
          label: "Requerimientos De usuario",
          items: [
            {
              label: "Requerimientos Funcionales",
              items: [
                {
                  label: "Iniciar Sesión",
                  slug: "requerimientos/Rf01",
                },
                {
                  label: "Cerrar Sesión",
                  slug: "requerimientos/Rf02",
                },
                {
                  label: "Restablecer Contraseña",
                  slug: "requerimientos/Rf03",
                },
                {
                  label: " Cambiar Contraseña",
                  slug: "requerimientos/Rf04",
                },
                {
                  label: "Registrar Usuario",
                  slug: "requerimientos/Rf05",
                },
                {
                  label: "Actualizar Usuario",
                  slug: "requerimientos/Rf06",
                },
                {
                  label: "Cambiar estado del Usuario",
                  slug: "requerimientos/Rf07",
                },
                {
                  label: " Listar Usuarios",
                  slug: "requerimientos/Rf08",
                },
                {
                  label: " Buscar Usuario",
                  slug: "requerimientos/Rf09",
                },
                {
                  label: " Registrar Centro",
                  slug: "requerimientos/Rf10",
                },
                {
                  label: "Actualizar Centro",
                  slug: "requerimientos/Rf11",
                },
                {
                  label: "Cambiar estado del Centro",
                  slug: "requerimientos/Rf12",
                },
                {
                  label: "Buscar Centro",
                  slug: "requerimientos/Rf13",
                },
                {
                  label: "Listar Centros",
                  slug: "requerimientos/Rf14",
                },
                {
                  label: "Registrar áreas",
                  slug: "requerimientos/Rf15",
                },
                {
                  label: "Actualizar áreas",
                  slug: "requerimientos/Rf16",
                },
                {
                  label: " Modificar el Estado del  Áreas",
                  slug: "requerimientos/Rf17",
                },
                {
                  label: "Buscarqueda del  Áreas",
                  slug: "requerimientos/Rf18",
                },
                {
                  label: "Listar Áreas",
                  slug: "requerimientos/Rf19",
                },
                {
                  label: "Registrar Programas de Formación",
                  slug: "requerimientos/Rf20",
                },
                {
                  label: "Actualizar Programas de Formación",
                  slug: "requerimientos/Rf21",
                },
                {
                  label: "Modificar el Estado del  Programa",
                  slug: "requerimientos/Rf22",
                },
                {
                  label: "Buscar Programa de Formación",
                  slug: "requerimientos/Rf23",
                },
                {
                  label: "Listar Programas de Formación",
                  slug: "requerimientos/Rf24",
                },
                {
                  label: "Registrar Ficha",
                  slug: "requerimientos/Rf25",
                },
                {
                  label: "Actualizar Ficha",
                  slug: "requerimientos/Rf26",
                },
                {
                  label: "AModificar el Estado de la Ficha",
                  slug: "requerimientos/Rf27",
                },
                {
                  label: "Buscar  Ficha",
                  slug: "requerimientos/Rf28",
                },
                {
                  label: " Listar Fichas",
                  slug: "requerimientos/Rf29",
                },
                {
                  label: " Registrar Sede",
                  slug: "requerimientos/Rf30",
                },
                {
                  label: " Actualizar Sede",
                  slug: "requerimientos/Rf31",
                },
                {
                  label: "Modificar el Estado de la sede",
                  slug: "requerimientos/Rf32",
                },
                {
                  label: "Buscar  Sede ",
                  slug: "requerimientos/Rf33",
                },
                {
                  label: "Listar Sedes",
                  slug: "requerimientos/Rf34",
                },
                {
                  label: "Registrar Sitio",
                  slug: "requerimientos/Rf35",
                },
                {
                  label: "Actualizar Sitio",
                  slug: "requerimientos/Rf36",
                },
                {
                  label: "Modificar el Estado del Sitio",
                  slug: "requerimientos/Rf37",
                },
                {
                  label: "Buscar  Sitio",
                  slug: "requerimientos/Rf38",
                },
                {
                  label: "Listar Sitio",
                  slug: "requerimientos/Rf39",
                },
                {
                  label: "Registrar tipo de Sitio",
                  slug: "requerimientos/Rf40",
                },
                {
                  label: "Actualizar tipo de Sitio",
                  slug: "requerimientos/Rf41",
                },
                {
                  label: "Cambiar estado tipo de Sitio",
                  slug: "requerimientos/Rf42",
                },
                {
                  label: " Buscar tipo de Sitio",
                  slug: "requerimientos/Rf43",
                },
                {
                  label: "Listar tipo de Sitio",
                  slug: "requerimientos/Rf44",
                },
                {
                  label: "Registrar Municipios",
                  slug: "requerimientos/Rf45",
                },
                {
                  label: "Actualizar Municipio",
                  slug: "requerimientos/Rf46",
                },
                {
                  label: "Cambiar estado del Municipio",
                  slug: "requerimientos/Rf47",
                },
                {
                  label: "Buscar Municipio",
                  slug: "requerimientos/Rf48",
                },
                {
                  label: "Listar Municipios",
                  slug: "requerimientos/Rf49",
                },
                {
                  label: "Registrar Categorías",
                  slug: "requerimientos/Rf50",
                },
                {
                  label: "Actualizar Categoría",
                  slug: "requerimientos/Rf51",
                },
                {
                  label: "Cambiar estado de la Categoría",
                  slug: "requerimientos/Rf52",
                },
                {
                  label: "Buscar Categoría",
                  slug: "requerimientos/Rf53",
                },
                {
                  label: "Listar Categorías",
                  slug: "requerimientos/Rf54",
                },
                {
                  label: "Registrar Elemento o Materiales",
                  slug: "requerimientos/Rf55",
                },
                {
                  label: "Actualizar Elemento",
                  slug: "requerimientos/Rf56",
                },
                {
                  label: "Modificar el Estado del  Elemento",
                  slug: "requerimientos/Rf57",
                },
                {
                  label: "Buscarqueda del  Elemento",
                  slug: "requerimientos/Rf58",
                },
                {
                  label: "Listar Elementos",
                  slug: "requerimientos/Rf59",
                },
                {
                  label: "Agregar Stock al  Inventario",
                  slug: "requerimientos/Rf60",
                },
                {
                  label: "Registrar Elementos en el Inventario",
                  slug: "requerimientos/Rf61",
                },
                {
                  label: "Actualizar Inventario",
                  slug: "requerimientos/Rf62",
                },
                {
                  label: "Cambiar Estado del Elemento en el Inventario",
                  slug: "requerimientos/Rf63",
                },
                {
                  label: "Buscar en el Inventario",
                  slug: "requerimientos/Rf64",
                },
                {
                  label: "Listar Inventario",
                  slug: "requerimientos/Rf65",
                },
                {
                  label: "Registrar Tipo de Movimiento",
                  slug: "requerimientos/Rf66",
                },
                {
                  label: "Actualizar Tipo de Movimiento",
                  slug: "requerimientos/Rf67",
                },
                {
                  label: "Cambiar Estado del Tipo de Movimiento",
                  slug: "requerimientos/Rf68",
                },
                {
                  label: "Buscar Tipo de Movimiento",
                  slug: "requerimientos/Rf69",
                },
                {
                  label: "Listar Tipos de Movimiento",
                  slug: "requerimientos/Rf70",
                },
                {
                  label: "Registrar Movimiento",
                  slug: "requerimientos/Rf71",
                },
                {
                  label: "Actualizar Movimiento",
                  slug: "requerimientos/Rf72",
                },
                {
                  label: " Aceptar Movimiento",
                  slug: "requerimientos/Rf73",
                },
                {
                  label: "Cancelar Movimiento",
                  slug: "requerimientos/Rf74",
                },
                {
                  label: " Buscar Movimiento",
                  slug: "requerimientos/Rf75",
                },
                {
                  label: " Buscar Movimiento",
                  slug: "requerimientos/Rf75",
                },
                {
                  label: "Listar Movimientos",
                  slug: "requerimientos/Rf76",
                },
                {
                  label: "Registrar Unidad de Medida",
                  slug: "requerimientos/Rf77",
                },
                {
                  label: "Actualizar Unidades de Medida",
                  slug: "requerimientos/Rf78",
                },
                {
                  label: "Cambiar Estado de la Unidad de Medida",
                  slug: "requerimientos/Rf79",
                },
                {
                  label: "Buscar Unidad de Medida",
                  slug: "requerimientos/Rf80",
                },
                {
                  label: "Listar Unidades de Medida",
                  slug: "requerimientos/Rf81",
                },
                {
                  label: "Registrar Rol",
                  slug: "requerimientos/Rf82",
                },
                {
                  label: "Actualizar Rol",
                  slug: "requerimientos/Rf83",
                },
                {
                  label: "Cambiar Estado del Rol",
                  slug: "requerimientos/Rf84",
                },
                {
                  label: "Buscar Rol",
                  slug: "requerimientos/Rf85",
                },
                {
                  label: "Listar Roles",
                  slug: "requerimientos/Rf86",
                },
                {
                  label: " Registrar Características",
                  slug: "requerimientos/Rf87",
                },
                {
                  label: "Actualizar Característica",
                  slug: "requerimientos/Rf88",
                },
                {
                  label: "Listar Características",
                  slug: "requerimientos/Rf89",
                },
                {
                  label: "Buscar Característica",
                  slug: "requerimientos/Rf90",
                },
                {
                  label: "Gestionar Notificaciones",
                  slug: "requerimientos/Rf91",
                },
                {
                  label: "Configurar Perfil de Usuario",
                  slug: "requerimientos/Rf92",
                },
                {
                  label: "Gestionar Reportes",
                  slug: "requerimientos/Rf93",
                },
                {
                  label: "Actualizar Código Inventario",
                  slug: "requerimientos/Rf94",
                },
                {
                  label: "Listar Código de Inventario",
                  slug: "requerimientos/Rf95",
                },
                {
                  label: " Registrar Usuarios Masivamente",
                  slug: "requerimientos/Rf96",
                },
                {
                  label: "Dar de baja al elemento",
                  slug: "requerimientos/Rf97",
                },
                {
                  label: "Asignar Permisos",
                  slug: "requerimientos/Rf98",
                },
              ],
            },
            {
              label: "Requerimientos No Funcionales",
              items: [
                {
                  label: "Tecnologias Utilizadas",
                  slug: "tecnologias1",
                },
              ],
            },
          ],
        },
        {
          label: "Modelado de datos UML",
          items: [
            {
              label: "Diagramas de Casos de Uso",
              slug: "modeloDatos/diagramCasos",
            },
            {
              label: "Diagramas de Secuencia",
              slug: "modeloDatos/diagramSecuencia",
            },
            { label: "Diagrama de Clases", slug: "modeloDatos/diagramClass" },
            {
              label: "Modelo Entidad-Relacion (ER)",
              slug: "modeloDatos/modelER",
            },
            { label: "Modelo Logico", slug: "modeloDatos/logicModel" },
          ],
        },
        {
          label: "Formatrack",
          items: [
            { label: "Que es FormaTrack?", slug: "formatrack/conclusion" },
          ],
        },
      ],
    }),
  ],
});
