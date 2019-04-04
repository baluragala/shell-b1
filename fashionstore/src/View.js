

export class View {

    static renderContact(name, email) {
        const h1 = document.createElement("h1");
        h1.innerText = name;

        const h3 = document.createElement("h3");
        h3.innerText = email;

        const div = document.createElement("div");
        div.appendChild(h1);
        div.appendChild(h3);
        return div;
    }

    static renderProduct(product,productService){
        const h1 = document.createElement("h1");
        h1.innerText = `${product.title}(${product.stock})`;

        const h3 = document.createElement("h3");
        h3.innerText = product.price;

        const button = document.createElement("button");
        button.innerText = "DELETE";
        button.style.backgroundColor = "red";
        button.style.borderBottomWidth = "2px";
        button.style.borderBottomColor = "black";
        button.addEventListener('click', e => {
            const consent = confirm("Are you sure to delete?")
            if (consent) {
                productService.deleteProduct(product.id)
            }
        })

        const div = document.createElement("div");
        div.appendChild(h1);
        div.appendChild(button);
        div.appendChild(h3);
        return div;
    }

    static renderProductList(products,parent, productService ) {
        const nodes = products.map(p => View.renderProduct(p,productService));
        for (let node of nodes) {
            parent.appendChild(node);
        }
        return parent;
    }
}