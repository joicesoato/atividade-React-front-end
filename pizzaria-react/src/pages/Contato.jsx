import { useState } from "react";

function Contato() {

    // STATES DOS CAMPOS

    const [nome, setNome] = useState("");

    const [email, setEmail] = useState("");

    const [mensagem, setMensagem] = useState("");

    // STATES DOS ERROS

    const [erroNome, setErroNome] = useState("");

    const [erroEmail, setErroEmail] = useState("");

    const [erroMensagem, setErroMensagem] = useState("");

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

        // Impede reload
        evento.preventDefault();

        // Limpa erros anteriores
        setErroNome("");
        setErroEmail("");
        setErroMensagem("");

        let formularioValido = true;

        // VALIDAR NOME

        if (nome.trim() === "") {

            setErroNome(
                "Por favor, preencha seu nome."
            );

            formularioValido = false;

        }

        // VALIDAR EMAIL

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

        // VALIDAR MENSAGEM

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

        // FORMULÁRIO VÁLIDO

        if (formularioValido) {

            alert(
                "Mensagem enviada com sucesso!"
            );

            // Limpar formulário

            setNome("");
            setEmail("");
            setMensagem("");

        }

    }

    return (

        <main className="pagina-contato">

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

                        <label>Nome</label>

                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) =>
                                setNome(e.target.value)
                            }
                        />

                        <small className="erro">
                            {erroNome}
                        </small>

                    </div>

                    {/* EMAIL */}

                    <div className="campo-formulario">

                        <label>E-mail</label>

                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <small className="erro">
                            {erroEmail}
                        </small>

                    </div>

                    {/* MENSAGEM */}

                    <div className="campo-formulario">

                        <label>Mensagem</label>

                        <textarea
                            rows="6"
                            placeholder="Digite sua mensagem"
                            value={mensagem}
                            onChange={(e) =>
                                setMensagem(e.target.value)
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

        </main>

    );

}

export default Contato;