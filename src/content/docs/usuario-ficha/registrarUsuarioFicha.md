---
title: "Registrar Asignación de Ficha a Usuario"
description: "Permite registrar una nueva asignación de una ficha a un usuario en el sistema."
slug: "usuario-ficha/registrarUsuarioFicha"
---

Este endpoint permite registrar una nueva asignación de ficha a usuario con los datos proporcionados.

| Variable | Valor                                                        |
| -------- | ------------------------------------------------------------ |
| URL      | [/api/usuario_ficha/register/](/api/usuario_ficha/register/) |
| Method   | `POST`                                                       |
| Headers  | Authorization : Bearer `token`                               |

### Body

```json
{
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_usuario": "integer",
  "fk_ficha": "integer"
}
```
