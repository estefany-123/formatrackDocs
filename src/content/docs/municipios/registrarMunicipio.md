---
title: "Registrar Municipio"
description: "Permite registrar un nuevo municipio en el sistema."
slug: "municipios/registrarMunicipio"
---

Este endpoint permite registrar un nuevo municipio con los datos proporcionados.

| Variable | Valor                          |
| -------- | ------------------------------ |
| URL      | [/municipios](/municipios)     |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

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
