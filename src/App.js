import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
const App = () => {



    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("todos");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    })
    const [status, setStatus] = useState('all')
    const [filteredTodos, setfilteredTodos] = useState([])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setfilteredTodos(todos.filter(item => item.completed === true))
                break
            case 'uncompleted':
                setfilteredTodos(todos.filter(item => item.completed === false))
                break
            default:
                setfilteredTodos(todos)
        }
    }

    useEffect(() => {
        filterHandler()
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos, status])


    return (
        <div>
            {inputText}

            <Header />
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />

            <TodoList
                todos={todos}
                setTodos={setTodos}
                setfilteredTodos={setfilteredTodos}
                filteredTodos={filteredTodos} />


        </div>
    )
}

export default App