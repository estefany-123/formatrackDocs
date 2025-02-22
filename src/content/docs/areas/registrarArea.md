---
title: "Registrar área"
description: "Permite registrar una nueva área en el sistema."
slug: "areas/registrarArea"
---

Este endpoint permite registrar una nueva área con los datos proporcionados.

| Variable | Valor                          |
| -------- | ------------------------------ |
| URL      | [/areas](/areas)               |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

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
