import React from "react";
import Todo from "./Todo";
 import './TodoList.css';


export default function TodoList(props) {
    return (
        <div>
            { props.todoList.map(todo => 
                <Todo key={todo.id} todo={todo} />
                    )}

        </div>
    );
}