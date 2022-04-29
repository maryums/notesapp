import React from 'react'
import { nanoid } from 'nanoid';

const Form = (props) => {

    const inputTextHandler = (e) => {
        props.setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        props.setTodos([
            ...props.todos, { text: props.inputText, completed: false, id: nanoid() }
        ])
        props.setInputText('')
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }

    return (
        <div className='form'>

            <form>
                <input
                    value={props.inputText}
                    onChange={inputTextHandler}
                    type="text"

                    className="todo-input" />

                <button className='submit-btn'
                    onClick={submitTodoHandler}
                    className="todo-button" type="submit">
                    Submit
                </button>

                <div className="select">
                    <select
                        onChange={statusHandler}
                        name="todos" className="filter-todo">
                        <option value="all">All Tasks</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Form