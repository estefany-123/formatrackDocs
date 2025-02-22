---
title: "Registrar elementos"
description: "Permite registrar un nuevo elemento en el sistema."
slug: "elementos/registrarElementos"
---

Este endpoint permite registrar un nuevo elemento con los datos proporcionados.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/api/elemento/register/](/api/elemento/register/) |
| Method   | `POST`                         |
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