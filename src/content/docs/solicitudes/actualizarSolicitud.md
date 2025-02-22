---
title: "Actualizar Solicitud"
description: "Permite actualizar una solicitud existente en el sistema."
slug: "solicitudes/actualizarSolicitud"
---

Este endpoint permite actualizar una solicitud específica utilizando su ID.

| Variable | Valor                                                                      |
| -------- | -------------------------------------------------------------------------- |
| URL      | [/api/solicitud/update/:id_solicitud](/api/solicitud/update/:id_solicitud) |
| Method   | `PUT`                                                                      |
| Headers  | Authorization : Bearer `token`                                             |

### Body

```json
{
  "descripcion": "string",
  "cantidad": "integer",
  "estado": "string",
  "fecha_solicitud": "date",
  "fecha_actualizacion": "date",
  "fk_elemento": "integer",
  "fk_usuario": "integer"
}
```
