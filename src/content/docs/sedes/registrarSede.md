---
title: "Registrar Sede"
description: "Permite registrar una nueva sede en el sistema."
slug: "sedes/registrarSede"
---

Este endpoint permite registrar una nueva sede con los datos proporcionados.

| Variable | Valor                          |
| -------- | ------------------------------ |
| URL      | [/Sede](/Sede)                 |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

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
