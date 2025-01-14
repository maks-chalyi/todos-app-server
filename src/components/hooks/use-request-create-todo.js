import { useState } from 'react'

export const useRequestCreateTodo = (refreshTodos) => {
	const [todoValue, setTodoValue] = useState('')

	const createTodo = () => {
		fetch('http://localhost:3000/todos-app-data', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoValue,
				completed: false,
			}),
		})
			.then((responseData) => responseData.json())
			.then((uploadedTodos) => {
				console.log('Новая задача ДОБАВЛЕНА', uploadedTodos)
				refreshTodos()
			})
		setTodoValue('')
	}

	return { createTodo, todoValue, setTodoValue }
}
