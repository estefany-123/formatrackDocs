---
title: "Actualizar Movimiento"
description: "Permite actualizar un movimiento existente en el sistema."
slug: "movimientos/actualizarMovimiento"
---

Este endpoint permite actualizar un movimiento específico utilizando su ID.

| Variable | Valor                                                                          |
| -------- | ------------------------------------------------------------------------------ |
| URL      | [/api/movimiento/update/:id_movimiento](/api/movimiento/update/:id_movimiento) |
| Method   | `PUT`                                                                          |
| Headers  | Authorization : Bearer `token`                                                 |

### Body

```json
{
  "descripcion": "string",
  "cantidad": "integer",
  "hora_ingreso": "time",
  "hora_salida": "time",
  "estado": "string",
  "caracterizacion": "string",
  "fecha_movimiento": "date",
  "fecha_actualizacion": "date",
  "fk_usuario": "integer",
  "fk_tipo_movimiento": "integer",
  "fk_sitio": "integer",
  "fk_elemento": "integer"
}
```
