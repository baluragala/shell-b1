import { View } from "./View"
import { ProductService } from "./Product.Service";

class App {
    constructor() {
        this.productService = new ProductService();
    }



    async render() {
        const root = document.querySelector("#root");
        const productsSection = document.createElement("section");
        const products = await this.productService.getProducts();
        console.log(products)
        View.renderProductList(products, productsSection, this.productService);
        root.appendChild(productsSection);    

        const form = document.querySelector("#addProductForm");
        form.addEventListener('submit', async e => {
          
            const title = document.querySelector("[name='title']").value;
            const price = document.querySelector("[name='price']").value;
            const stock = document.querySelector("[name='stock']").value;
            const product = { title, price, stock };
            const newProduct = await this.productService.addProduct(product);
            alert(newProduct.id);
            e.preventDefault();
            
        })
    }
}

const app = new App();
app.render();
