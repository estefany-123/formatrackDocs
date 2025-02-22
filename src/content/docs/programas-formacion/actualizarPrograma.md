---
title: "Actualizar Programa de Formación"
description: "Permite actualizar un programa de formación existente en el sistema."
slug: "programas-formacion/actualizarPrograma"
---

Este endpoint permite actualizar un programa de formación específico utilizando su ID.

| Variable | Valor                                                  |
| -------- | ------------------------------------------------------ |
| URL      | [/P.formacion/:id_programa](/P.formacion/:id_programa) |
| Method   | `PUT`                                                  |
| Headers  | Authorization : Bearer `token`                         |

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
