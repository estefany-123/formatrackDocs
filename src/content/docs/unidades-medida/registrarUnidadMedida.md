---
title: "Registrar Unidad de Medida"
description: "Permite registrar una nueva unidad de medida en el sistema."
slug: "unidades-medida/registrarUnidadMedida"
---

Este endpoint permite registrar una nueva unidad de medida con los datos proporcionados.

| Variable | Valor                                          |
| -------- | ---------------------------------------------- |
| URL      | [/api/unidad/register/](/api/unidad/register/) |
| Method   | `POST`                                         |
| Headers  | Authorization : Bearer `token`                 |

### Body

```json
{
  "nombre": "string",
  "estado": "boolean",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date"
}
```
