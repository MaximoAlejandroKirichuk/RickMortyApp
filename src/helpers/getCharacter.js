
export const getCharacter = async ({species}) => {
    const url = `https://rickandmortyapi.com/api/character/?species=${species}`;
    const reps = fetch(url);
    const {results} = await reps
        .then(res => res.json())
        .catch(err => console.error(err));

    const characters = results.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender
        })  
    )

    console.log(characters);
    return characters;
}