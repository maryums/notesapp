import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

const Todo = ({ text, todo, todos, setTodos }) => {
    const handleDelete = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const handleComplete = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            } return item
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : " "}`} > {text}</li>
            <button
                onClick={handleComplete} className='complete-btn'> <FaCheck />
            </button>
            <button
                onClick={handleDelete} className='trash-btn'> <FaTrash />
            </button>
        </div>

    )
}

export default Todo