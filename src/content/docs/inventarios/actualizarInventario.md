---
title: "Actualizar Inventario"
description: "Permite actualizar los datos de un elemento en el inventario."
slug: "inventario/actualizarInventario"
---

Este endpoint permite actualizar un elemento del inventario utilizando su ID.

| Variable | Valor                                                                          |
| -------- | ------------------------------------------------------------------------------ |
| URL      | [/api/inventario/update/:id_inventario](/api/inventario/update/:id_inventario) |
| Method   | `PUT`                                                                          |
| Headers  | Authorization : Bearer `token`                                                 |

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

Este endpoint también permite actualizar la imagen del elemento usando la clave `img`.
