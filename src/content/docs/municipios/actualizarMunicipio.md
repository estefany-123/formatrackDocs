---
title: "Actualizar Municipio"
description: "Permite actualizar un municipio existente en el sistema."
slug: "municipios/actualizarMunicipio"
---

Este endpoint permite actualizar un municipio específico utilizando su ID.

| Variable | Valor                              |
| -------- | ---------------------------------- |
| URL      | [/municipios/:id](/municipios/:id) |
| Method   | `PUT`                              |
| Headers  | Authorization : Bearer `token`     |

### Body

```json
{
  "nombre": "string",
  "departamento": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```
