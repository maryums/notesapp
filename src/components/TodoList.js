import React from 'react'
import Todo from './Todo'

const TodoList = ({ setfilteredTodos, filteredTodos, todos, setTodos }) => {

    return (
        <div>

            <div className='todo-container'>
                <ul className='todo-list'>
                    {
                        filteredTodos.map(item => (
                            <Todo
                                todo={item}
                                todos={todos}
                                setTodos={setTodos}
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                completed={item.completed}
                            />

                        ))}
                </ul>
            </div>



        </div>


    )
}

export default TodoList