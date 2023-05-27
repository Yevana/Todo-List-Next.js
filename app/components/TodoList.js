"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = ({ todoData, setData }) => {

    const [todoId, setTodoId] = useState();




    const addTodoId = (data) => {
        setTodoId(data._id)
    }

    const deleteTodoList = () => {
        axios.delete(`/api/todo?id=${todoId}`).then((res) => {
            setData(true);
            document.getElementById('closeModal').click();
        }).catch((err) => {
            console.log(err);
        });
    }



    return (
        <>
            <ul className="list-group border-0">
                {!todoData.length ? "No data found" : todoData.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{item.description} <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => addTodoId(item)}><i className="bi bi-trash3-fill text-danger"></i></button></li>
                ))}
            </ul>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Do you really want to delect this item?This action cannot be undone.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="closeModal" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={deleteTodoList}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList;