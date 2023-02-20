import type React from "react"

type Character = {
	id: number
	name: string
	img_url: string
}

type CharacterProps = {
	characters: Array<Character>
}

const Characters = (props: CharacterProps) => {
	const { characters } = props

	return (
		<ul>
			{characters.map((character) => {
				return (
					<li key={character.id}>
						<h3>{character.name}</h3>
						<img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
					</li>
				)
			})}
		</ul>
	)
}

export default Characters