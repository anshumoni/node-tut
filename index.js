const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ecomerce")

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

const saveToDB = async()=>{
    const ProductModel = new mongoose.model('products',productSchema);
    const data = new ProductModel({
        name:"Sony",
        price:4000,
        brand:"Sony",
        category:"electronic"
    })
    const result = await data.save();
    console.log("result",result);
}
 
const updatetoDB = async()=>{
    const ProductModel = new mongoose.model('products',productSchema);
    const data = await ProductModel.updateOne(
            {name:'Sony'},
        {
            $set:{price:5000}
        }
        )
     console.log(data)   
}

const deleteDb = async()=>{
    const ProductModel = new mongoose.model('products',productSchema);
    const data = await ProductModel.deleteOne({name:"Mobile"})
    console.log("data",data);
 
}

const searchDB = async()=>{
    const ProductModel = new mongoose.model('products',productSchema);
    const data = await ProductModel.find({name:"Sony"})
    console.log("srch result",data)

}
searchDB()