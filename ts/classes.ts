import { Product, IProductService } from "./interfaces";

class ProductService implements IProductService {
    //private _products: Array<Product>;
    constructor(private _products: Array<Product>) {
        //this._products = products;
    }

    add(product: Product): void {
        this._products.push(product);
    }

    get products(): Array<Product>{
        return this._products;
    }
    set products(value: Array<Product>) {
        this._products = value;
    }
}

let s = new ProductService([{ title: 'p1', price: 10, stock: 10 }]);
