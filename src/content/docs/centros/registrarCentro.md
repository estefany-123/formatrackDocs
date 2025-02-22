---
title: "Registrar centro"
description: "Permite registrar un nuevo centro en el sistema."
slug: "centros/registrarCentro"
---

Este endpoint permite registrar un nuevo centro con los datos proporcionados.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/centros](/centros)           |
| Method   | `POST`                         |
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