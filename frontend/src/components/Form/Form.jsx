import { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  function formatarCpf(valor) {
    valor = valor.replace(/\D/g, "");

    valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");

    return valor;
  }

  function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    return valor;
  }

  function handleCPF(event) {
    const valorFormatado = formatarCpf(event.target.value);
    setCpf(valorFormatado);
  }

  function handleTelefone(event) {
    const valorFormatado = formatarTelefone(event.target.value);
    setTelefone(valorFormatado);
  }

  function cleanForm() {
    setCpf("");
    setTelefone("");
  }

  return (
    <div className="card-form">
      <div className="card-header">
        <h4>Dados do {props.cabecalho}</h4>
      </div>

      <div className="card-body">
        <form action={props.action} method="post">
          <div className="form-group form-group-full">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Ex: Ana Beatriz Souza"
            />
          </div>

          <div className="form-group-grid">

            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                placeholder="Ex: 000.000.000-01"
                value={cpf}
                onChange={handleCPF}
                maxLength="14"
              />
            </div>

            <div className="form-group">
              <label>Data de Nascimento</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Ex: aluno@email.com"
              />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="text"
                placeholder="Ex: (00) 00000-0000"
                value={telefone}
                onChange={handleTelefone}
                maxLength="15"
              />
            </div>

          </div>

          <div className="buttons">
            <div className="btn-register">
              <button type="submit">
                Cadastrar Aluno
              </button>
            </div>

            <div className="btn-clean">
              <button type="reset" onClick={cleanForm}>
                Limpar
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}