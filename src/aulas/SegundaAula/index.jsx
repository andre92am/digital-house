import './style.scss'

export function TerceiraAula() {

    const componentsFinded = [
        { name: 'Component Card', description: 'teste', image: ''},
        { name: 'Component Card 2', description: 'teste 2', image: ''},
        { name: 'Component Card 3', description: 'teste 3', image: ''},
        { name: 'Component Card 4', description: 'teste 4', image: ''},
        { name: 'Component Card 5', description: 'teste 5', image: ''}
    ]

    return (
        <div>
            <h1>Lista de componentes encontrados no sistema</h1>
            <ul>
                {
                    componentsFinded.map(component)
                }
            </ul>
        </div>
    )

}
