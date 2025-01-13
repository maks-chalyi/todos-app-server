import styles from './todos-app.module.scss'
import { useState, useEffect } from 'react'
import { TodosPanel } from './todos-panel/todos-panel'
import { TodosList } from './todos-list/todos-list'

export const TodosApp = () => {
	const [todos, setTodos] = useState([])
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	useEffect(() => {
		fetch('http://localhost:3000/todos-app-data')
			.then((responseData) => responseData.json())
			.then((uploadedTodos) => setTodos(uploadedTodos))
	}, [refreshTodosFlag])

	return (
		<section className={styles.todosApp}>
			<div className={styles.todosApp__container}>
				<TodosPanel refreshTodos={refreshTodos} />
				<TodosList todos={todos} refreshTodos={refreshTodos} />
			</div>
		</section>
	)
}
