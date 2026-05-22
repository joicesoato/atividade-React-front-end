function PizzaCard({ pizza, adicionarPizza }) {

    return (

        <article className='pizza-card'>

            <img
                src={pizza.imagem}
                alt={pizza.nome}
            />

            <h2>{pizza.nome}</h2>

            <p>{pizza.descricao}</p>

            <span className='preco'>
                R$ {pizza.preco},00
            </span>

            <button
                onClick={() => adicionarPizza(pizza)}
            >
                Comprar
            </button>

        </article>

    )
}

export default PizzaCard