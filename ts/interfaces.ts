export interface Product {
    title: string;
    price: number;
    stock: number;
    additionalFeatures?: Array<Feature>;
}

interface Feature {
    name?: string;
    desc?: string;
}

export interface IProductService {
    add: (p: Product) => void
}

let p: Product = { title: 'note', price: 2000, stock: 100 };
p.additionalFeatures = [{}];