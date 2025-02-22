---
title: "Actualizar Sede"
description: "Permite actualizar una sede existente en el sistema."
slug: "sedes/actualizarSede"
---

Este endpoint permite actualizar una sede específica utilizando su ID.

| Variable | Valor                            |
| -------- | -------------------------------- |
| URL      | [/Sede/:id_sede](/Sede/:id_sede) |
| Method   | `PUT`                            |
| Headers  | Authorization : Bearer `token`   |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_centro": "integer"
}
```
