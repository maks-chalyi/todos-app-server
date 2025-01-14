import styles from './todos-panel.module.scss'
import { useState } from 'react'
import { Input } from '../../basic-components/input/input'
import { Button } from '../../basic-components/button/button'
import { BsAlphabet } from 'react-icons/bs'
import { BsSortAlphaDown } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'
import { useRequestCreateTodo } from '../hooks'

export const TodosPanel = ({ refreshTodos }) => {
	const { createTodo, todoValue, setTodoValue } =
		useRequestCreateTodo(refreshTodos)

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
