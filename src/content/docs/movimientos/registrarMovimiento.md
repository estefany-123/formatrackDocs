---
title: "Registrar Movimiento"
description: "Permite registrar un nuevo movimiento en el sistema."
slug: "movimientos/registrarMovimiento"
---

Este endpoint permite registrar un nuevo movimiento con los datos proporcionados.

| Variable | Valor                                                  |
| -------- | ------------------------------------------------------ |
| URL      | [/api/movimiento/register/](/api/movimiento/register/) |
| Method   | `POST`                                                 |
| Headers  | Authorization : Bearer `token`                         |

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
