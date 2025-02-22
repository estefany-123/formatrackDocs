---
title: "Actualizar centro"
description: "Actualiza los datos de un centro existente en el sistema."
slug: "centros/actualizarCentro"
---

Este endpoint permite actualizar la información de un centro específico mediante su ID.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/centros/:id](/centros/:id)   |
| Method   | `PUT`                          |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_municipio": "integer"
}
```