---
title: "Registrar Tipo de Movimiento"
description: "Permite registrar un nuevo tipo de movimiento en el sistema."
slug: "tipos-movimiento/registrarTipoMovimiento"
---

Este endpoint permite registrar un nuevo tipo de movimiento con los datos proporcionados.

| Variable | Valor                                                          |
| -------- | -------------------------------------------------------------- |
| URL      | [/api/tipoMovimiento/register/](/api/tipoMovimiento/register/) |
| Method   | `POST`                                                         |
| Headers  | Authorization : Bearer `token`                                 |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```