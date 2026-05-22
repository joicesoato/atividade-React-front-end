function Modal({
    carrinho,
    total,
    setAbrirModal,
    setCarrinho
}) {

    function confirmarPedido() {

        alert("Pedido confirmado 🍕");

        setCarrinho([]);

        localStorage.removeItem("carrinho");

        setAbrirModal(false);
    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Resumo do Pedido</h2>

                <div>

                    {carrinho.map((pizza, index) => (

                        <div
                            key={index}
                            className="item-modal"
                        >

                            <span>{pizza.nome}</span>

                            <span>
                                R$ {pizza.preco},00
                            </span>

                        </div>

                    ))}

                </div>

                <p>
                    Quantidade: {carrinho.length}
                </p>

                <p>
                    Total: R$ {total}
                </p>

                <div className="modal-botoes">

                    <button
                        id="btn-fechar"
                        onClick={() => setAbrirModal(false)}
                    >
                        Fechar
                    </button>

                    <button
                        id="btn-confirmar"
                        onClick={confirmarPedido}
                    >
                        Confirmar Pedido
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Modal;