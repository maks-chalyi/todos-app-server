export const Button = ({ children, onClick, isActive }) => {
	return (
		<button
			className={`_main-button__light`}
			// className={isActive ? `_main-button__light is-active` : '_main-button__light'}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
