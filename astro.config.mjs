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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
