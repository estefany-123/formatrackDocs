---
title: "Actualizar Verificación"
description: "Permite actualizar una verificación existente en el sistema."
slug: "verificaciones/actualizarVerificacion"
---

Este endpoint permite actualizar una verificación específica utilizando su ID.

| Variable | Valor                                                                                  |
| -------- | -------------------------------------------------------------------------------------- |
| URL      | [/api/verificacion/update/:id_verificacion](/api/verificacion/update/:id_verificacion) |
| Method   | `PUT`                                                                                  |
| Headers  | Authorization : Bearer `token`                                                         |

### Body

```json
{
  "persona_encargada": "string",
  "persona_asignada": "string",
  "hora_ingreso": "time",
  "hora_fin": "time",
  "fecha_verificacion": "date",
  "fecha_actualizacion": "date",
  "fk_inventario": "integer"
}
```
