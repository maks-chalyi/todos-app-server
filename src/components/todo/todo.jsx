import styles from './todo.module.scss'
import { useState } from 'react'
import { Input } from '../../basic-components/input/input'
import { Button } from '../../basic-components/button/button'
import { AiOutlineDelete } from 'react-icons/ai'
import { CiSaveDown2 } from 'react-icons/ci'

export const Todo = ({ id, title, completed, refreshTodos }) => {
	const [modifiedFieldInputValue, setModifiedFieldInputValue] =
		useState(title)
	const [isEditingFlag, setIsEditingFlag] = useState(false)

	const clickedForRenameTodoTitle = () => {
		setIsEditingFlag(true)
	}

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

	const deleteTodo = (id) => {
		fetch(`http://localhost:3000/todos-app-data/${id}`, {
			method: 'DELETE',
		})
		console.log('Задача УДАЛЕНА, ответ сервера')
		refreshTodos()
	}

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

	return (
		<>
			<li className={styles.todo}>
				<Input
					className={styles.todo__completed}
					type="checkbox"
					checked={completed}
					readOnly
					onClick={() => changeTodoStatus(id, completed)}
				/>
				{isEditingFlag ? (
					<Input
						type="text"
						value={modifiedFieldInputValue}
						onChange={({ target }) =>
							setModifiedFieldInputValue(target.value)
						}
					/>
				) : (
					<p
						className={styles.todo__title}
						onClick={clickedForRenameTodoTitle}
					>
						{title}
					</p>
				)}

				{isEditingFlag ? (
					<Button onClick={() => saveRenamedTodoTitle(id)}>
						<CiSaveDown2 />
					</Button>
				) : (
					<Button>
						<AiOutlineDelete onClick={() => deleteTodo(id)} />
					</Button>
				)}
			</li>
		</>
	)
}
