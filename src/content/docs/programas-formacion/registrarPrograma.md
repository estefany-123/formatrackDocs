---
title: "Registrar Programa de Formación"
description: "Permite registrar un nuevo programa de formación en el sistema."
slug: "programas-formacion/registrarPrograma"
---

Este endpoint permite registrar un nuevo programa de formación con los datos proporcionados.

| Variable | Valor                          |
| -------- | ------------------------------ |
| URL      | [/P.formacion](/P.formacion)   |
| Method   | `POST`                         |
| Headers  | Authorization : Bearer `token` |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_area": "integer"
}
```
