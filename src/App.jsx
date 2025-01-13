
import { Header } from './basic-components/header/header'
import { Footer } from './basic-components/footer/fotter'
import { TodosApp } from './components/todos-app'

export default function App() {

	return (
		<>
			<Header />
			<main>
				<TodosApp />
			</main>
			<Footer />
		</>
	)
}