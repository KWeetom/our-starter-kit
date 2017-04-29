export const schema = {
  "type": "object",
  "properties": {
    "products.json": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "commerce.productName"
          },
          "desc": {
            "type": "string",
            "faker": "commerce.product"
          }
        },
        "required": ["id", "name", "desc"]
      }
    }
  },
  "required": ["products"]
};
