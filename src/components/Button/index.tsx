import type React from "react"

type ButtonProps = {
	children?: React.ReactNode
}

const Button = (props: ButtonProps) => {
	const { children } = props

	return (
		<button>{ children ? children : null }</button>
	)
}

export default Button;