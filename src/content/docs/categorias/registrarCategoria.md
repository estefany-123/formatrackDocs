---
title: "Registrar categoría"
description: "Permite registrar una nueva categoría en el sistema."
slug: "categorias/registrarCategoria"
---

Este endpoint permite registrar una nueva categoría con los datos proporcionados.

| Variable | Valor                          |
|----------|--------------------------------|
| URL      | [/categorias](/categorias)     |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```