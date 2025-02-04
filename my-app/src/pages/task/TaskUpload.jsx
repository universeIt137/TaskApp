"use client"

import { url } from "@/utility/url";
import axios from "axios";
import { useState } from "react";

const TaskUpload = () => {
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `${token}`, // Ensure the token format is correct
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const payload = {
            title, description
        };
        try {
            setLoading(true);
            let res = await axios.post(`${url()}/tasks`, payload, config);
            setLoading(false)
            if (res) {
                e.target.reset();
                alert("Task added successfully")
            }
        } catch (error) {
            alert("task added fail")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className=' w-[50%] mx-auto my-36' >
            <h1 className='lg:text-4xl font-semibold text-center lg:mb-4 ' >Task Upload From</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        name='title'
                        placeholder="Enter your task title"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className='my-3' >
                    <label htmlFor="" className='mt-4 block ' >Description</label>
                    <textarea
                        rows={5}
                        name='description'
                        placeholder="Enter your task title"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <button disabled={loading} className=' border px-4 py-1 font-semibold shadow-lg rounded-md bg-green-600 hover:bg-green-700 text-white ' >{
                        loading ? "Submiting.." : "Submit"
                    }</button>
                </div>
            </form>
        </div>
    );
};

export default TaskUpload;