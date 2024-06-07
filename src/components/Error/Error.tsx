import ErrorDog from './error_dog.svg'

const Error = () =>{

    return (
        <div>
            <p>Ops! não foi possível encontrar o usuário digitado!</p>
            <img src={ErrorDog} alt="Imagem ilustrativa de um cachorro fareijando osso. Créditos ao artista:  storyset (Freepik)" />
        </div>
    )
}

export default Error;