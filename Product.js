class Product {
    static getName() {
        return "Product"
    }
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    get Title() {
        return this.title.toUpperCase();
    }

    set Title(value) {
        if (value.trim().length === 0) {
            throw Error("title cannot be empty")
        }
        this.title = value;
    }

    print(formatted = false) {
        if (formatted) {
            console.log("***************************************************")
            console.log("Title:" + this.title + " Price:" + this.price)
            console.log("***************************************************")
        } else {
            console.log(JSON.stringify(this))
        }
    }

}