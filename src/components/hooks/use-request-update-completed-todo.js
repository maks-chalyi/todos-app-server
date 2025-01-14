export const useRequestUpdateCompletedTodo = (refreshTodos, title) => {
	const changeTodoStatus = (id, completed) => {
		fetch(`http://localhost:3000/todos-app-data/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: title,
				completed: !completed,
			}),
		})
			.then((responseData) => responseData.json())
			.then((loadedTodos) => {
				if (!completed) {
					console.log(
						'Задача изменена на ВЫПОЛНЕНА, ответ сервера',
						loadedTodos,
					)
				} else {
					console.log(
						'Задача изменена на НЕ ВЫПОЛНЕНА, ответ сервера',
						loadedTodos,
					)
				}
				refreshTodos()
			})
	}

	return changeTodoStatus
}
