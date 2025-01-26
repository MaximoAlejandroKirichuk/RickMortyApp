// this component recive the props from the CharacterList component and render the character data
export const Character = ({name,img,status,origin}) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={img} alt="name" />
        <p>{status}</p>
        <p>{origin}</p>
    </div>
  )
}
