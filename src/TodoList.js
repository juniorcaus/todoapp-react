import React from "react";
 


export default function TodoList(props) {
    return (
        <div>
        { props.todoList.map(todo => <p>{todo}</p> ) }
        </div>
    );
}