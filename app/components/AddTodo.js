"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const AddTodo = ({ setData }) => {
    const [description, setDescription] = useState();
    const [error, setError] = useState('');

    const addTodoList = () => {
        const data = {
            description
        }
        if (!description) {
            setError('Please fill the description')
        } else {
            axios.post('/api/todo', data).then((res) => {
                setDescription('');
                setData(true);
            }).catch((err) => {
                console.log(err);
            });

        }
    }
    return (
        <>
            <form className="mb-3">
                <div className="row justify-content-between mb-3">
                    <div className="col-9">
                        <input type="text" className="form-control mb-3" id="exampleInputtext1" value={description || ''} onChange={(e) => { setDescription(e.target.value) }} required />
                        <div className="text-danger">{error}</div>
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-primary w-100" onClick={addTodoList}>Add Todo</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTodo;