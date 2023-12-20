import React from "react";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";
import axios from '../../axios'

function TodoList({todos, fetchData}) {
const updateTodo = async (id) => {
    try{
        const response = await axios.put(`/todos/${id}`,{id})
        fetchData();
        return response.data.json
    }
    catch (err) {
        console.log(err.message)
    }
}

const deleteTodo = async (id) => {
    try{
        const response = await axios.delete(`/todos/${id}`,{id})
        fetchData();
        return response.data.json
    }
    catch (err) {
        console.log(err.message)
    }
}

    return (
        <div>
            <ListContainer>
                {todos?.map((todo) => (
                    <Row key={todo._id}>
                        <Text onClick={() => updateTodo(todo._id)} isCompleted={todo.completed}>{todo.text}</Text>
                        <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>                            
                    </Row>
                ))}
            </ListContainer>
        </div>
    );
}

export default TodoList;