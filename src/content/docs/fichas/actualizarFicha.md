---
title: "Actualizar ficha"
description: "Actualiza los datos de una ficha existente en el sistema."
slug: "fichas/actualizarFicha"
---

Este endpoint permite actualizar la información de una ficha específica mediante su ID.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/Fichas/:id_ficha](/Fichas/:id_ficha) |
| Method   | `PUT`                          |
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