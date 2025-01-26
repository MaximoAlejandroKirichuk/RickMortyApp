import { useState } from "react"
import { SearchCharacter } from "./components/SearchSpecies"
import { Character } from "./components/CharacterItem"

export const AppRick = () => {
    const [characters, setCharacters] = useState([])
    

    const onSearch = (character) => {
        setCharacters([ character,...characters])
    }


    return (
    <div className="container">
        <h1 className="title">Rick and Morty App</h1>
        <SearchCharacter 
            onSearch = {onSearch}
        />



        {
            characters.map(character => (
                <Character
                    key={character.id}
                    name={character.name}
                    img= {character.image}
                    status = {character.status}
                    origin = {character.origin.name}
                />
            )
            )
        }
        
    </div>
  )
}
