import React from 'react';

const TaskCard = ({ task }) => {
    const { userId, title, description, status, createdAt } = task;
    return (
        <div>
            <div className=' p-6 border shadow-lg rounded-xl hover:translate-y-4 transition-all duration-1000 ' >
                <h1 className='font-bold text-xl py-1 ' >{title}</h1>
                <p>{description}</p>
                <div className='my-2 flex items-center justify-between ' >
                    <button className={status === "Completed" ? " bg-purple-500 px-4 py-1 shadow-2xl rounded-lg text-white " : status === "Pending" ? " bg-green-500 hover:bg-green-700 px-4 py-1 shadow-2xl rounded-lg text-white " : " bg-red-500 hover:bg-red-700 transition-all duration-1000  "} >{status}</button>
                    <p> {  new Date(createdAt).toLocaleString() } </p>
                </div>

                <div>
                    <p>Written By : { userId.name}</p>
                </div>

            </div>
        </div>
    );
};

export default TaskCard;