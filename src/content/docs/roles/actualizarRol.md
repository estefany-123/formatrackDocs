---
title: "Actualizar Rol"
description: "Permite actualizar un rol existente en el sistema."
slug: "roles/actualizarRol"
---

Este endpoint permite actualizar un rol específico utilizando su ID.

| Variable | Valor                                              |
| -------- | -------------------------------------------------- |
| URL      | [/api/rol/update/:id_rol](/api/rol/update/:id_rol) |
| Method   | `PUT`                                              |
| Headers  | Authorization : Bearer `token`                     |

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
