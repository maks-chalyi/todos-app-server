import styles from './todos-panel.module.scss'
import { useState } from 'react'
import { Input } from '../../basic-components/input/input'
import { Button } from '../../basic-components/button/button'
import { BsAlphabet } from 'react-icons/bs'
import { BsSortAlphaDown } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'

export const TodosPanel = ({ refreshTodos }) => {
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
				console.log('Новая задача добавлена', uploadedTodos)
				refreshTodos()
			})
		setTodoValue('')
	}

	return (
		<div className={styles.todosPanel}>
			<Input
				type="text"
				placeholder="Напишите новую задачу или для поиска"
				value={todoValue}
				onChange={({ target }) => setTodoValue(target.value)}
			/>

			<Button>
				<BsAlphabet />
			</Button>
			<Button>
				<BsSortAlphaDown />
			</Button>
			<Button onClick={createTodo}>
				<IoAdd />
			</Button>
		</div>
	)
}
