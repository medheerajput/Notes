import React, { useState } from 'react';
import TodoList from './TodoList';
const TodoApp = () => {
    let [text, setText] = useState('');
    let [value, setValue] = useState([]);

    let getData = () => {
        setValue((oldData) => {
            return [...oldData, text];
        }
        );
        setText(' ');
    }

    let DeleteItem = (id) => {
        console.log('deleted item');
        setValue((oldData) => {

            //arr me sara todo list h chintu or index me sare index number store h to bs match karke return krna hai
            return oldData.filter((arr, index) => {
                return index !== id;
            })
        })
    }
    return (<>
        <div className="main w-full bg-[#222] bg-opacity-95 h-screen p-0 overflow-x-hidden">
            <div className="in flex flex-col items-center  my-16 sm:text-3xl">
                <span className='text-3xl text-yellow-200 sm:text-5xl'>Todo_List</span>
                {/* without value attribute u can't leave search blank  */}
                <div className="my-6 flex ">
                    <input
                        className='p-2 px-12 rounded-md'
                        placeholder='Add your todo' type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
                    <span
                        className='p-2 mx-2 px-6 sm:text-2xl text-yellow-200 text-lg font-bold rounded-md text-center bg-[#FF0000] cursor-pointer'
                        onClick={getData}>Add</span>
                </div>
                <hr className='text-blue-400 w-5/6 text-center' />
            </div>
            <div className="list w-full flex justify-center  flex-wrap">
                {
                    value.map((val, index) => {
                        return <TodoList
                            key={index}
                            id={index}
                            text={val}
                            onSelect={DeleteItem}
                        />
                    })
                }
            </div>
        </div>

    </>)
}

export default TodoApp;
