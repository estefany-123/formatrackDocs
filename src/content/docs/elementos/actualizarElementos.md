---
title: "Actualizar elementos"
description: "Actualiza los datos de un elemento existente en el sistema."
slug: "elementos/actualizarElementos"
---

Este endpoint permite actualizar la información de un elemento específico mediante su ID.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/api/elemento/update/:id_elemento](/api/elemento/update/:id_elemento) |
| Method   | `PUT`                          |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "codigo_sena": "string",
  "codigo_unpsc": "string",
  "nombre": "string",
  "descripcion": "string",
  "stock": "integer",
  "estado": "boolean",
  "actividad": "string",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_unidad_medida": "integer",
  "fk_categoria": "integer"
}
```