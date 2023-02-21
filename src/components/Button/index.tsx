import type React from "react"

type ButtonProps = {
	children?: React.ReactNode
}

const Button = (props: ButtonProps) => {
	const { children } = props

	const handleOnClick = () => {
		alert("Hello Astro!")
	}

	return (
		<button onClick={handleOnClick}>{ children ? children : null }</button>
	)
}

export default Button;