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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Qué es FormaTrack?', slug: 'guides/example' },
					],
				},
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
