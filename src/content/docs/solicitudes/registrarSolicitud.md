---
title: "Registrar Solicitud"
description: "Permite registrar una nueva solicitud en el sistema."
slug: "solicitudes/registrarSolicitud"
---

Este endpoint permite registrar una nueva solicitud con los datos proporcionados.

| Variable | Valor                                                |
| -------- | ---------------------------------------------------- |
| URL      | [/api/solicitud/register/](/api/solicitud/register/) |
| Method   | `POST`                                               |
| Headers  | Authorization : Bearer `token`                       |

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
