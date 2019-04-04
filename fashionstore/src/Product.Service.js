import Axios from "axios";

export class ProductService {
  async getProducts() {
    const URL = " http://localhost:7000/products";
    const products = await Axios.get(URL);
    return products.data;
  }

  async addProduct(product) {
    const URL = " http://localhost:3000/products";
    const newProductResponse = await Axios.post(URL, product);
    return newProductResponse.data;
  }

  async deleteProduct(id) {
    const URL = `http://localhost:3000/products/${id}`;
    const r = await Axios.delete(URL);
    console.log(r);
  }
}
