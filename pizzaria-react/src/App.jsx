import { useState, useEffect } from "react";
import "./styles/style.css";

function App() {

    // ===============================
    // PIZZAS
    // ===============================

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

    // ===============================
    // STATES
    // ===============================

    const [carrinho, setCarrinho] = useState([]);

    const [modalAberto, setModalAberto] =
        useState(false);

    // CONTATO

    const [nome, setNome] = useState("");

    const [email, setEmail] = useState("");

    const [mensagem, setMensagem] =
        useState("");

    // ERROS

    const [erroNome, setErroNome] =
        useState("");

    const [erroEmail, setErroEmail] =
        useState("");

    const [erroMensagem, setErroMensagem] =
        useState("");

    // ===============================
    // LOCAL STORAGE
    // ===============================

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

    // ===============================
    // ADICIONAR PIZZA
    // ===============================

    function adicionarPizza(pizza) {

        setCarrinho([
            ...carrinho,
            pizza
        ]);

    }

    // ===============================
    // REMOVER PIZZA
    // ===============================

    function removerPizza(index) {

        const novoCarrinho =
            carrinho.filter(
                (_, i) => i !== index
            );

        setCarrinho(novoCarrinho);

    }

    // ===============================
    // TOTAL
    // ===============================

    const total = carrinho.reduce(
        (acc, pizza) => acc + pizza.preco,
        0
    );

    // ===============================
    // VALIDAR EMAIL
    // ===============================

    function emailValido(emailTexto) {

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(emailTexto);

    }

    // ===============================
    // ENVIAR FORMULÁRIO
    // ===============================

    function enviarFormulario(evento) {

        evento.preventDefault();

        // LIMPAR ERROS

        setErroNome("");
        setErroEmail("");
        setErroMensagem("");

        let formularioValido = true;

        // NOME

        if (nome.trim() === "") {

            setErroNome(
                "Por favor, preencha seu nome."
            );

            formularioValido = false;

        }

        // EMAIL

        if (email.trim() === "") {

            setErroEmail(
                "Por favor, preencha seu e-mail."
            );

            formularioValido = false;

        } else if (!emailValido(email)) {

            setErroEmail(
                "Digite um e-mail válido."
            );

            formularioValido = false;

        }

        // MENSAGEM

        if (mensagem.trim() === "") {

            setErroMensagem(
                "Digite sua mensagem."
            );

            formularioValido = false;

        } else if (
            mensagem.trim().length < 10
        ) {

            setErroMensagem(
                "A mensagem deve ter pelo menos 10 caracteres."
            );

            formularioValido = false;

        }

        // SUCESSO

        if (formularioValido) {

            alert(
                "Mensagem enviada com sucesso!"
            );

            setNome("");
            setEmail("");
            setMensagem("");

        }

    }

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
                            <a href="#contato">
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

                {/* CONTATO */}

                <section
                    className="pagina-contato"
                    id="contato"
                >

                    <section className="contato-container">

                        <div className="contato-texto">

                            <h1>Fale Conosco</h1>

                            <p>

                                Tem alguma dúvida,
                                sugestão ou deseja
                                fazer um pedido especial?
                                Envie sua mensagem
                                para nossa equipe.

                            </p>

                        </div>

                        {/* FORMULÁRIO */}

                        <form
                            id="form-contato"
                            onSubmit={enviarFormulario}
                        >

                            {/* NOME */}

                            <div className="campo-formulario">

                                <label>
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(
                                            e.target.value
                                        )
                                    }
                                />

                                <small className="erro">

                                    {erroNome}

                                </small>

                            </div>

                            {/* EMAIL */}

                            <div className="campo-formulario">

                                <label>
                                    E-mail
                                </label>

                                <input
                                    type="text"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                />

                                <small className="erro">

                                    {erroEmail}

                                </small>

                            </div>

                            {/* MENSAGEM */}

                            <div className="campo-formulario">

                                <label>
                                    Mensagem
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Digite sua mensagem"
                                    value={mensagem}
                                    onChange={(e) =>
                                        setMensagem(
                                            e.target.value
                                        )
                                    }
                                ></textarea>

                                <small className="erro">

                                    {erroMensagem}

                                </small>

                            </div>

                            {/* BOTÃO */}

                            <button
                                type="submit"
                                className="btn-enviar"
                            >

                                Enviar Mensagem

                            </button>

                        </form>

                    </section>

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

                        {/* LISTA */}

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

                        {/* QUANTIDADE */}

                        <p>

                            Quantidade:
                            {carrinho.length}

                        </p>

                        {/* TOTAL */}

                        <p>

                            Soma final:
                            R$ {total}

                        </p>

                        {/* BOTÕES */}

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
                                onClick={() => {

                                    alert(
                                        "Pedido confirmado com sucesso 🍕"
                                    );

                                    setCarrinho([]);

                                    setModalAberto(false);

                                }}
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

export default App;