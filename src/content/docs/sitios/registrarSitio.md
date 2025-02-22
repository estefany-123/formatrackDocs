---
title: "Registrar Sitio"
description: "Permite registrar un nuevo sitio en el sistema."
slug: "sitios/registrarSitio"
---

Este endpoint permite registrar un nuevo sitio con los datos proporcionados.

| Variable | Valor                          |
| -------- | ------------------------------ |
| URL      | [/Sitio](/Sitio)               |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "nombre": "string",
  "persona_encargada": "string",
  "ubicacion": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_tipo_sitio": "integer",
  "fk_area": "integer"
}
```
