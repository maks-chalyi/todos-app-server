import styles from './todo.module.scss'
import { Input } from '../../basic-components/input/input'
import { Button } from '../../basic-components/button/button'
import { AiOutlineDelete } from 'react-icons/ai'
import { CiSaveDown2 } from 'react-icons/ci'
import {
	useRequestDeleteTodo,
	useRequestUpdateTodo,
	useRequestUpdateCompletedTodo,
} from '../hooks'

export const Todo = ({ id, title, completed, refreshTodos }) => {
	const clickedForRenameTodoTitle = () => {
		setIsEditingFlag(true)
	}

	const {
		saveRenamedTodoTitle,
		modifiedFieldInputValue,
		setModifiedFieldInputValue,
		isEditingFlag,
		setIsEditingFlag,
	} = useRequestUpdateTodo(refreshTodos, title)

	const deleteTodo = useRequestDeleteTodo(refreshTodos)

	const changeTodoStatus = useRequestUpdateCompletedTodo(refreshTodos, title)

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
