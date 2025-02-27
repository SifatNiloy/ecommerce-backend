
import { model, Schema } from 'mongoose';
import { TInventory, TProduct, Tvariants } from './product.interface';

const variantSchema= new Schema<Tvariants>({
    type:String,
    value: String
})
const inventorySchema= new Schema<TInventory>({
    quantity :Number,
    inStock : Boolean
})
const ProductSchema= new Schema<TProduct>({
    name : {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants:[variantSchema],
    inventory: inventorySchema

})

const Product = model('Product', ProductSchema)