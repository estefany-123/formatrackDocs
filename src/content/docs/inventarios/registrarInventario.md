---
title: "Registrar Inventario"
description: "Permite registrar un nuevo elemento en el inventario."
slug: "inventario/registrarInventario"
---

Este endpoint permite registrar un nuevo elemento en el inventario con los datos proporcionados.

| Variable | Valor                                                  |
| -------- | ------------------------------------------------------ |
| URL      | [/api/inventario/register/](/api/inventario/register/) |
| Method   | `POST`                                                 |
| Headers  | Authorization : Bearer `token`                         |

### Body

```json
{
  "valor": "decimal",
  "costo": "decimal",
  "descripcion": "string",
  "stock": "integer",
  "estado": "string",
  "fecha_creacion": "date",
  "fecha_actualizacion": "date",
  "fk_sitio": "integer",
  "fk_elemento": "integer"
}
```

### Form-Data (Imagen)

Este endpoint también requiere un archivo de imagen bajo la clave `img`.
