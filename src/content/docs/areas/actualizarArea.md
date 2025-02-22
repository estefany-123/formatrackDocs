---
title: "Actualizar área"
description: "Actualiza los datos de un área existente en el sistema."
slug: "areas/actualizarArea"
---

Este endpoint permite actualizar la información de un área específica mediante su ID.

| Variable | Valor                              |
| -------- | ---------------------------------- |
| URL      | [/areas/:id_Area](/areas/:id_Area) |
| Method   | `PUT`                              |
| Headers  | Authorization : Bearer `token`     |

### Body

```json
{
  "nombre": "string",
  "persona_encargada": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_sede": "integer"
}
```
