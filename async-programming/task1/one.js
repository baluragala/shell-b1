async function getDetails() {
    const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = await todosResponse.json();
    const users = {};
    for (let todo of todos) {
        let { userId } = todo;
        users[userId] = userId;
    }
    
    for (let u of Object.keys(users)) {
        const url = `https://jsonplaceholder.typicode.com/users/${u}`;
        const userResponse = await fetch(url);
        const user = await userResponse.json();
        todos = todos.map(todo => {
            if (todo.userId === user.id) {
                todo.user = user;
            }
            return todo;
        })
    }
    console.log(todos);
}