import React from "react";

const TodoList = (props) => {
    return (<>
       
        <div className="w-72 sm:w-96 m-4 p-1 shadow-md shadow-black border-2 border-gray-800 rounded-md flex flex-col items-center">
            <div className="p-2 px-4 text-xl text-blue-200 font-bold sm:text-3xl">{props.text}</div>
            <hr className='text-blue-400 w-5/6 text-center m-2' />
            <span  onClick={() => {
                props.onSelect(props.id)
            }} className='p-2 px-6  bg-[#FF0000] text-yellow-200 text-center text-xl font-bold rounded-md cursor-pointer'>Delete</span>
        </div>
    </>)
}

export default TodoList;
