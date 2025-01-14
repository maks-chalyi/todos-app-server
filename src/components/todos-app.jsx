import styles from './todos-app.module.scss'
import { useState } from 'react'
import { TodosPanel } from './todos-panel/todos-panel'
import { TodosList } from './todos-list/todos-list'
import { useRequestReadTodos } from './hooks'

export const TodosApp = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	const todos = useRequestReadTodos(refreshTodosFlag)

	return (
		<section className={styles.todosApp}>
			<div className={styles.todosApp__container}>
				<TodosPanel refreshTodos={refreshTodos} />
				<TodosList todos={todos} refreshTodos={refreshTodos} />
			</div>
		</section>
	)
}
