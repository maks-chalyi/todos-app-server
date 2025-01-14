export const useRequestDeleteTodo = (refreshTodos) => {
	const deleteTodo = (id) => {
		fetch(`http://localhost:3000/todos-app-data/${id}`, {
			method: 'DELETE',
		})
		console.log('Задача УДАЛЕНА, ответ сервера')
		refreshTodos()
	}

	return deleteTodo
}