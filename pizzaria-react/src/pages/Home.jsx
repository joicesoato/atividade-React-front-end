import { useState, useEffect } from "react";

function Home() {

    // PIZZAS

    const pizzas = [

        {
            id: 1,
            nome: "Pizza Calabresa",
            descricao: "Pizza com calabresa e cebola.",
            preco: 45,
            imagem: "/imagens/pizza_calabresa.png"
        },

        {
            id: 2,
            nome: "Pizza Frango com Catupiry",
            descricao: "Pizza de frango com catupiry.",
            preco: 50,
            imagem: "/imagens/pizza_frango.png"
        },

        {
            id: 3,
            nome: "Pizza Brócolis e Bacon",
            descricao: "Pizza Brócolis e Bacon.",
            preco: 55,
            imagem: "/imagens/pizza_brocolis.png"
        }

    ];

    // CARRINHO

    const [carrinho, setCarrinho] = useState([]);

    // MODAL

    const [modalAberto, setModalAberto] =
        useState(false);

    // LOCAL STORAGE

    useEffect(() => {

        const carrinhoSalvo =
            localStorage.getItem("carrinho");

        if (carrinhoSalvo) {

            setCarrinho(
                JSON.parse(carrinhoSalvo)
            );

        }

    }, []);

    useEffect(() => {

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

    }, [carrinho]);

    // ADICIONAR

    function adicionarPizza(pizza) {

        setCarrinho([
            ...carrinho,
            pizza
        ]);

    }

    // REMOVER

    function removerPizza(index) {

        const novoCarrinho =
            carrinho.filter(
                (_, i) => i !== index
            );

        setCarrinho(novoCarrinho);

    }

    // TOTAL

    const total = carrinho.reduce(
        (acc, pizza) => acc + pizza.preco,
        0
    );

    return (

        <>

            {/* HEADER */}

            <header>

                <div>
                    <p>Pizzaria</p>
                </div>

                <nav>

                    <ul>

                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Menu
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Contato
                            </a>
                        </li>

                    </ul>

                </nav>

            </header>

            {/* MAIN */}

            <main>

                {/* TÍTULO */}

                <section>

                    <h1>Menu</h1>

                </section>

                {/* PIZZAS */}

                <section>

                    {pizzas.map((pizza) => (

                        <article key={pizza.id}>

                            <h2>
                                {pizza.nome}
                            </h2>

                            <img
                                src={pizza.imagem}
                                alt={pizza.nome}
                            />

                            <p>
                                {pizza.descricao}
                            </p>

                            <p className="preco">
                                R$ {pizza.preco},00
                            </p>

                            <button
                                className="btn-comprar"
                                onClick={() =>
                                    adicionarPizza(pizza)
                                }
                            >

                                Comprar

                            </button>

                        </article>

                    ))}

                </section>

                {/* CARRINHO */}

                <section className="carrinho">

                    <h2>Carrinho</h2>

                    <ul id="lista-carrinho">

                        {carrinho.map((pizza, index) => (

                            <li key={index}>

                                <div className="item-info">

                                    <span className="nome-pizza">

                                        {pizza.nome}

                                    </span>

                                    <span className="preco-pizza">

                                        R$ {pizza.preco},00

                                    </span>

                                </div>

                                <button
                                    className="btn-remover"
                                    onClick={() =>
                                        removerPizza(index)
                                    }
                                >

                                    Remover

                                </button>

                            </li>

                        ))}

                    </ul>

                    {/* TOTAL */}

                    <div className="total-carrinho">

                        Total:
                        R$ {total}

                    </div>

                    {/* BOTÃO */}

                    <button
                        id="btn-finalizar"
                        onClick={() =>
                            setModalAberto(true)
                        }
                    >

                        Finalizar Pedido

                    </button>

                </section>

            </main>

            {/* FOOTER */}

            <footer>

                <p>© 2026 Pizzaria</p>

            </footer>

            {/* MODAL */}

            {modalAberto && (

                <div className="modal-overlay">

                    <div className="modal">

                        <h2>
                            Resumo do Pedido
                        </h2>

                        <div id="modal-pedidos">

                            {carrinho.map(
                                (pizza, index) => (

                                <div
                                    className="item-modal"
                                    key={index}
                                >

                                    <span>
                                        {pizza.nome}
                                    </span>

                                    <span>
                                        R$ {pizza.preco},00
                                    </span>

                                </div>

                            ))}

                        </div>

                        <p>
                            Quantidade:
                            {carrinho.length}
                        </p>

                        <p>
                            Soma final:
                            R$ {total}
                        </p>

                        <div className="modal-botoes">

                            <button
                                id="btn-fechar"
                                onClick={() =>
                                    setModalAberto(false)
                                }
                            >

                                Fechar

                            </button>

                            <button
                                id="btn-confirmar"
                            >

                                Confirmar Pedido

                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>

    );

}

export default Home;