---
title: "Actualizar categoría"
description: "Actualiza los datos de una categoría existente en el sistema."
slug: "categorias/actualizarCategoria"
---

Este endpoint permite actualizar la información de una categoría específica mediante su ID.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/categorias/:id](/categorias/:id) |
| Method   | `PUT`                          |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```