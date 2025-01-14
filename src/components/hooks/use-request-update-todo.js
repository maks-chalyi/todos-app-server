import { useState } from 'react'

export const useRequestUpdateTodo = (refreshTodos, title) => {
	const [modifiedFieldInputValue, setModifiedFieldInputValue] =
		useState(title)
	const [isEditingFlag, setIsEditingFlag] = useState(false)

	const saveRenamedTodoTitle = (id) => {
		fetch(`http://localhost:3000/todos-app-data/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: modifiedFieldInputValue,
				completed: false,
			}),
		})
			.then((responseData) => responseData.json())
			.then((loadedTodos) => {
				console.log('Задача ИЗМЕНЕНА, ответ сервера', loadedTodos)
				refreshTodos()
				setIsEditingFlag(false)
			})
	}

	return {
		saveRenamedTodoTitle,
		modifiedFieldInputValue,
		setModifiedFieldInputValue,
		isEditingFlag,
		setIsEditingFlag,
	}
}
