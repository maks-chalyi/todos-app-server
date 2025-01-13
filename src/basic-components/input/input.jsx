export const Input = ({
	className = '',
	type,
	placeholder,
	value,
	checked,
	readOnly,
	onChange,
	onClick
}) => {
	return (
		<>
			<input
				className={`_main-input ${className}`}
				type={type}
				checked={checked}
				readOnly={readOnly}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onClick={onClick}
			></input>
		</>
	)
}
