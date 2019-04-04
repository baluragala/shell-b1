class TypedQueue<A> {
    private data: Array<A>=[];
    add = (item: A) => this.data.push(item);
    remove = (): A => this.data.shift();
}

let n = new TypedQueue<number>();
n.add(1);


let n1 = new TypedQueue<Array<number>>();
n1.add([1]);
