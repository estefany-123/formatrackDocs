---
title: "Actualizar Tipo de Movimiento"
description: "Permite actualizar un tipo de movimiento existente en el sistema."
slug: "tipos-movimiento/actualizarTipoMovimiento"
---

Este endpoint permite actualizar un tipo de movimiento específico utilizando su ID.

| Variable | Valor                                                                      |
| -------- | -------------------------------------------------------------------------- |
| URL      | [/api/tipoMovimiento/update/:id_tipo](/api/tipoMovimiento/update/:id_tipo) |
| Method   | `PUT`                                                                      |
| Headers  | Authorization : Bearer `token`                                             |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```
