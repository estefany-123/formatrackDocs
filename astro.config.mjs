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
                  slug: "roles/cambiarEstadoRol",
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
                { label: "Eliminar Usuario", slug: "usuarios/eliminarUsuario" },
                { label: "Iniciar Sesión", slug: "usuarios/login" },
                { label: "Cerrar Sesión", slug: "usuarios/logout" },
                {
                  label: "Recuperar Contraseña",
                  slug: "usuarios/recuperarContraseña",
                },
                {
                  label: "Reestablecer contraseña",
                  slug: "usuarios/reestablecer-contrasena",
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
                  label: "Cambiar Estado del Caracteristica",
                  slug: "caracteristicas/cambiarEstadoCaracteristica",
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
              items: [],
            },
            {
              label: "Requerimientos No Funcionales",
              items: [],
            },
            {
              label: "Requerimientos tecnicos",
              items: [{ label: "Software", slug: "tecnicos/requeriTecni" }],
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
