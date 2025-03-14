// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FormaTrack',
			social: {
				github: 'https://github.com/migueldev2006/formatrackNodejs/tree/dev',
			},
			sidebar: [
				{
					label: 'Inicio',
					autogenerate: { directory: 'inicio' },
				},
				{
					label: 'Manual Tecnico',
					items :[
						{
							label: 'Areas',
							items: [
								{ label: 'Listar Áreas', slug: 'areas/listarAreas' },
								{ label: 'Buscar Área por Nombre', slug: 'areas/buscarAreaPorNombre' },
								{ label: 'Registrar Área', slug: 'areas/registrarArea' },
								{ label: 'Actualizar Área', slug: 'areas/actualizarArea' },
								{ label: 'Desactivar Área', slug: 'areas/desactivarArea' },
							],
						},

						{
							label: 'Categorías',
							items: [
							  { label: 'Listar Categorías', slug: 'categorias/listarCategorias' },
							  { label: 'Registrar Categoría', slug: 'categorias/registrarCategoria' },
							  { label: 'Actualizar Categoría', slug: 'categorias/actualizarCategoria' },
							  { label: 'Cambiar Estado de Categoría', slug: 'categorias/cambiarEstadoCategoria' },
							],
						},
						{
							label: 'Centros',
							items: [
							  { label: 'Listar Centros', slug: 'centros/listarCentros' },
							  { label: 'Buscar Centro por Nombre', slug: 'centros/buscarCentroPorNombre' },
							  { label: 'Registrar Centro', slug: 'centros/registrarCentro' },
							  { label: 'Actualizar Centro', slug: 'centros/actualizarCentro' },
							  { label: 'Cambiar Estado de Centro', slug: 'centros/cambiarEstadoCentro' },
							],
						},
						{
							label: 'Elementos',
							items: [
							  { label: 'Listar Elementos', slug: 'elementos/listarElementos' },
							  { label: 'Buscar Elementos por Nombre', slug: 'elementos/buscarElementosPorNombre' },
							  { label: 'Registrar Elementos', slug: 'elementos/registrarElementos' },
							  { label: 'Actualizar Elementos', slug: 'elementos/actualizarElementos' },
							  { label: 'Desactivar Elementos', slug: 'elementos/desactivarElementos' },
							],
						},
						{
							label: 'Fichas',
							items: [
							  { label: 'Listar Fichas', slug: 'fichas/listarFichas' },
							  { label: 'Buscar Ficha por Código', slug: 'fichas/buscarFichaPorCodigo' },
							  { label: 'Registrar Ficha', slug: 'fichas/registrarFicha' },
							  { label: 'Actualizar Ficha', slug: 'fichas/actualizarFicha' },
							  { label: 'Desactivar Ficha', slug: 'fichas/desactivarFicha' },
							],
						},
						{
							label: "Inventarios",
							items: [
							  { label: "Listar Inventarios", slug: "inventario/listarInventarios" },
							  { label: "Buscar Inventarios Por Estado", slug: "inventario/buscarInventariosPorEstado" },
							  { label: "Registrar Inventario", slug: "inventario/registrarInventario" },
							  { label: "Actualizar Inventario", slug: "inventario/actualizarInventario" },
							  { label: "Desactivar Inventario", slug: "inventario/desactivarInventario" }
							]
						},
						{
							"label": "Movimientos",
							"items": [
							  { "label": "Listar Movimientos", "slug": "movimientos/listarMovimientos" },
							  { "label": "Buscar Movimientos por Estado", "slug": "movimientos/buscarMovimientos" },
							  { "label": "Registrar Movimiento", "slug": "movimientos/registrarMovimiento" },
							  { "label": "Actualizar Movimiento", "slug": "movimientos/actualizarMovimiento" },
							  { "label": "Aceptar Movimiento", "slug": "movimientos/aceptarMovimiento" },
							  { "label": "Cancelar Movimiento", "slug": "movimientos/cancelarMovimiento" },
							  { "label": "Actualizar Stock por Movimiento", "slug": "movimientos/actualizarStockMovimiento" }
							]
						},
						{
							"label": "Municipios",
							"items": [
							  { "label": "Listar Municipios", "slug": "municipios/listarMunicipios" },
							  { "label": "Buscar Municipio por Nombre", "slug": "municipios/buscarMunicipio" },
							  { "label": "Registrar Municipio", "slug": "municipios/registrarMunicipio" },
							  { "label": "Actualizar Municipio", "slug": "municipios/actualizarMunicipio" },
							  { "label": "Cambiar Estado de Municipio", "slug": "municipios/cambiarEstadoMunicipio" }
							]
						},
						{
							"label": "Programas de Formación",
							"items": [
							  { "label": "Listar Programas de Formación", "slug": "programas-formacion/listarProgramas" },
							  { "label": "Buscar Programa de Formación por Nombre", "slug": "programas-formacion/buscarPrograma" },
							  { "label": "Registrar Programa de Formación", "slug": "programas-formacion/registrarPrograma" },
							  { "label": "Actualizar Programa de Formación", "slug": "programas-formacion/actualizarPrograma" },
							  { "label": "Desactivar Programa de Formación", "slug": "programas-formacion/desactivarPrograma" }
							]
						},
						{
							"label": "Roles",
							"items": [
							  { "label": "Listar Roles", "slug": "roles/listarRoles" },
							  { "label": "Buscar Rol por Nombre", "slug": "roles/buscarRol" },
							  { "label": "Registrar Rol", "slug": "roles/registrarRol" },
							  { "label": "Actualizar Rol", "slug": "roles/actualizarRol" },
							  { "label": "Desactivar Rol", "slug": "roles/desactivarRol" }
							]
						},
						{
							"label": "Sedes",
							"items": [
							  { "label": "Listar Sedes", "slug": "sedes/listarSedes" },
							  { "label": "Buscar Sede por Nombre", "slug": "sedes/buscarSede" },
							  { "label": "Registrar Sede", "slug": "sedes/registrarSede" },
							  { "label": "Actualizar Sede", "slug": "sedes/actualizarSede" },
							  { "label": "Desactivar Sede", "slug": "sedes/desactivarSede" }
							]
						},
						{
							"label": "Sitios",
							"items": [
							  { "label": "Listar Sitios", "slug": "sitios/listarSitios" },
							  { "label": "Buscar Sitio por Nombre", "slug": "sitios/buscarSitio" },
							  { "label": "Registrar Sitio", "slug": "sitios/registrarSitio" },
							  { "label": "Actualizar Sitio", "slug": "sitios/actualizarSitio" },
							  { "label": "Desactivar Sitio", "slug": "sitios/desactivarSitio" }
							]
						},
						{
							"label": "Solicitudes",
							"items": [
							  { "label": "Listar Solicitudes", "slug": "solicitudes/listarSolicitudes" },
							  { "label": "Buscar Solicitudes por Estado", "slug": "solicitudes/buscarSolicitudes" },
							  { "label": "Registrar Solicitud", "slug": "solicitudes/registrarSolicitud" },
							  { "label": "Actualizar Solicitud", "slug": "solicitudes/actualizarSolicitud" },
							  { "label": "Aceptar Solicitud", "slug": "solicitudes/aceptarSolicitud" },
							  { "label": "Rechazar Solicitud", "slug": "solicitudes/rechazarSolicitud" },
							  { "label": "Actualizar Stock por Solicitud", "slug": "solicitudes/actualizarStockSolicitud" }
							]
						},
						{
							"label": "Tipos de Movimiento",
							"items": [
							  { "label": "Listar Tipos de Movimiento", "slug": "tipos-movimiento/listarTipoMovimiento" },
							  { "label": "Buscar Tipos de Movimiento por Estado", "slug": "tipos-movimiento/buscarTipoMovimiento" },
							  { "label": "Registrar Tipo de Movimiento", "slug": "tipos-movimiento/registrarTipoMovimiento" },
							  { "label": "Actualizar Tipo de Movimiento", "slug": "tipos-movimiento/actualizarTipoMovimiento" },
							  { "label": "Desactivar Tipo de Movimiento", "slug": "tipos-movimiento/desactivarTipoMovimiento" }
							]
						},
						{
							"label": "Tipos de Sitio",
							"items": [
							  { "label": "Listar Tipos de Sitio", "slug": "tipos-sitio/listarTiposSitio" },
							  { "label": "Buscar Tipo de Sitio por Nombre", "slug": "tipos-sitio/buscarTipoSitio" },
							  { "label": "Registrar Tipo de Sitio", "slug": "tipos-sitio/registrarTipoSitio" },
							  { "label": "Actualizar Tipo de Sitio", "slug": "tipos-sitio/actualizarTipoSitio" },
							  { "label": "Cambiar Estado de Tipo de Sitio", "slug": "tipos-sitio/cambiarEstadoTipoSitio" }
							]
						},
						{
							"label": "Unidades de Medida",
							"items": [
							  { "label": "Listar Unidades de Medida", "slug": "unidades-medida/listarUnidadesMedida" },
							  { "label": "Buscar Unidad de Medida por Nombre", "slug": "unidades-medida/buscarUnidadMedida" },
							  { "label": "Registrar Unidad de Medida", "slug": "unidades-medida/registrarUnidadMedida" },
							  { "label": "Actualizar Unidad de Medida", "slug": "unidades-medida/actualizarUnidadMedida" },
							  { "label": "Desactivar Unidad de Medida", "slug": "unidades-medida/desactivarUnidadMedida" }
							]
						},
						{
							"label": "Usuario Ficha",
							"items": [
							  { "label": "Listar Asignaciones de Fichas a Usuarios", "slug": "usuario-ficha/listarUsuarioFicha" },
							  { "label": "Registrar Asignación de Ficha a Usuario", "slug": "usuario-ficha/registrarUsuarioFicha" },
							  { "label": "Actualizar Asignación de Ficha a Usuario", "slug": "usuario-ficha/actualizarUsuarioFicha" }
							]
						},
						{
							"label": "Usuarios",
							"items": [
							  { "label": "Listar Usuarios", "slug": "usuarios/listarUsuarios" },
							  { "label": "Buscar Usuario por Documento", "slug": "usuarios/buscarUsuario" },
							  { "label": "Registrar Usuario", "slug": "usuarios/registrarUsuario" },
							  { "label": "Actualizar Usuario", "slug": "usuarios/actualizarUsuario" },
							  { "label": "Cambiar Estado de Usuario", "slug": "usuarios/cambiarEstadoUsuario" },
							  { "label": "Eliminar Usuario", "slug": "usuarios/eliminarUsuario" },
							  { "label": "Iniciar Sesión", "slug": "usuarios/login" },
							  { "label": "Cerrar Sesión", "slug": "usuarios/logout" }
							]
						},
						{
							"label": "Verificaciones",
							"items": [
							  { "label": "Listar Verificaciones", "slug": "verificaciones/listarVerificaciones" },
							  { "label": "Buscar Verificación por Fecha", "slug": "verificaciones/buscarVerificacion" },
							  { "label": "Registrar Verificación", "slug": "verificaciones/registrarVerificacion" },
							  { "label": "Actualizar Verificación", "slug": "verificaciones/actualizarVerificacion" }
							]
						},
					]
				},
				{
						label: 'Requerimientos De usuario',
						items :[
							{
								label: 'Requerimientos tecnicos',
								items: [
									{ label: 'Software', slug: 'tecnicos/requeriTecni' },
								],
							},
							
						]
				},
				
				
				{
					"label": 'Formatrack',
					"items": [
						{ "label": "Que es FormaTrack?", "slug": "formatrack/conclusion" },
					]
				},
			],
		}),
	],
});
