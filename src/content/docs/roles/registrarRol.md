---
title: "Registrar Rol"
description: "Permite registrar un nuevo rol en el sistema."
slug: "roles/registrarRol"
---

Este endpoint permite registrar un nuevo rol con los datos proporcionados.

| Variable | Valor                                    |
| -------- | ---------------------------------------- |
| URL      | [/api/rol/register/](/api/rol/register/) |
| Method   | `POST`                                   |
| Headers  | Authorization : Bearer `token`           |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_usuario": "integer"
}
```
