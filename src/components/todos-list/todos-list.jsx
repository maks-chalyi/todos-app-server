import styles from './todos-list.module.scss'
import { Todo } from '../todo/todo'

export const TodosList = ({ todos, refreshTodos }) => {
	return (
		<div className={styles.todosList}>
			<ul className={styles.todosList__body}>
				{todos.map(({ id, title, completed }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						refreshTodos={refreshTodos}
					/>
				))}
			</ul>
		</div>
	)
}
