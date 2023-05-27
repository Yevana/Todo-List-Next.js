"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Card = () => {

    const [todoList, setTodoList] = useState([]);
    const [data, setData] = useState(false);

    const getTodoList = () => {
        axios.get('/api/todo').then((res) => {
            setTodoList(res.data.listTodos);
            setData(false);
        }).catch((err) => {
            console.log(err);
        });
    }

    const onUpdateData = () => {
        setData(true);
    }
    useEffect(() => {
        getTodoList();
    }, [data])

    return (
        <>
            <div className="card p-4">
                <h1 className="fs-3 fw-semibold ps-3">Todo List</h1>
                <div className="card-body">
                    <AddTodo setData={setData} />
                    <TodoList todoData={todoList} setData={setData} />
                </div>
            </div>
        </>
    )
}

export default Card;