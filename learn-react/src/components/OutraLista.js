function OutraLista({ itens }  ) {
    return (
        <div>
            <h3>Lista de coisas boas:</h3>
            {itens.map( (item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default OutraLista