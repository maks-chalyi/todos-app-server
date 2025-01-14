import { useState, useEffect } from 'react'

export const useRequestReadTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/todos-app-data')
			.then((responseData) => responseData.json())
			.then((uploadedTodos) => setTodos(uploadedTodos))
	}, [refreshTodosFlag])

	return todos
}
