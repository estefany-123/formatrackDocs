---
title: "Actualizar Sitio"
description: "Permite actualizar un sitio existente en el sistema."
slug: "sitios/actualizarSitio"
---

Este endpoint permite actualizar un sitio específico utilizando su ID.

| Variable | Valor                                |
| -------- | ------------------------------------ |
| URL      | [/Sitio/:id_sitio](/Sitio/:id_sitio) |
| Method   | `PUT`                                |
| Headers  | Authorization : Bearer `token`       |

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
