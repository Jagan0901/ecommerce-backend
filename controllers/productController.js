import { Product } from "../models/productModel.js"


const getProducts = async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const addProducts = async (req, res) => {
    const product = [
      {
        name: "name",
        category: "category",
        price: 99,
        description: "description",
        quantity: 1,
        image: "image",
      },

      {
        name: "name1",
        category: "category1",
        price: 99,
        description: "description1",
        quantity: 1,
        image: "image1",
      },
    ];
  try {
    const products = await Product.create(product);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getProducts, addProducts, getProductsByCategory };