import { useState } from "react";

function App() {
    const [ todo, setTodo ] = useState("");
    const [ todos, setTodos ] = useState([]);
    // function onChange(e) { setTodo(e.target.value); }
    const onChange = (e) => { setTodo(e.target.value); }
    const onSubmit = (e) => {
        e.preventDefault();
        if( todo === "") {
            return;
        } 
        setTodos((currentArray) => [todo, ...currentArray ])
        setTodo("");
    }
    console.log(todos);

    return (
        <div>
            <h1>My To Does</h1>
            {/* form은 기본적으로 submit 이벤트를 갖고 있다. */}
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={todo}
                    type="text"
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                { todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App; 