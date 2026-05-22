function Carrinho({
    carrinho,
    removerPizza,
    total,
    setAbrirModal
}) {

    return (

        <section className='carrinho'>

            <h2>🛒 Carrinho</h2>

            <ul>

                {carrinho.map((pizza, index) => (

                    <li key={index}>

                        <div>

                            <h4>{pizza.nome}</h4>

                            <span>
                                R$ {pizza.preco},00
                            </span>

                        </div>

                        <button
                            className='btn-remover'
                            onClick={() => removerPizza(index)}
                        >
                            Remover
                        </button>

                    </li>

                ))}

            </ul>

            <div className='total'>
                Total: R$ {total}
            </div>

            <button
                className='btn-finalizar'
                onClick={() => setAbrirModal(true)}
            >
                Finalizar Pedido
            </button>

        </section>

    )
}

export default Carrinho