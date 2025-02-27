import { z } from "zod";

const variantValidationSchema= z.object({
    type: z.string(),
    value: z.string()
})
const inventoryValidationSchema= z.object({
    quantity: z.number(),
    inStock: z.boolean()
})
const productValidationSchema = z.object({
    name: z.string({
        required_error: "name is required",
        invalid_type_error: "name must be string",
      }),
    description: z.string(),
    price: z.number().positive(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantValidationSchema),
    inventory: z.array(inventoryValidationSchema)
  });

export default productValidationSchema;