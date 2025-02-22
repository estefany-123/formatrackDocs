---
title: "Registrar ficha"
description: "Permite registrar una nueva ficha en el sistema."
slug: "fichas/registrarFicha"
---

Este endpoint permite registrar una nueva ficha con los datos proporcionados.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/Fichas](/Fichas)             |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "codigo_ficha": "string",
  "persona_encargada": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_programa": "integer"
}
```