import React from "react";

export default function Todo(props)  {
    return(
        <label>
            <input type="checkbox" />
                <p>{props.todo.name}</p>  
                <br />
        </label>
        
        );
}