import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function FormularioContato() {
  const [nome, setNome] = useState("");
  const [ddd, setDDD] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [textBtn, setTextBtn] = useState("Enviar");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextBtn("Enviando...");
    const templateParams={
      from_name: nome,
      ddd: ddd,
      telefone: telefone,
      email: email,
      cidade: cidade,
      estado:estado,
      message: mensagem
    }

    emailjs.send("service_jypwj6w", "template_5v7mtau",templateParams, "ZD6IEKPTOqkp0ZM2m").then(
      (success)=>{
        console.log(success);
        setTextBtn("Enviado !");
        setNome("");
        setDDD("");
        setTelefone("");
        setEmail("");
        setCidade("");
        setEstado("");
        setMensagem("");
      }
    )

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-xs sm:text-base sm:gap-4 gap-3">
      <label>
        <input
          className="w-full rounded p-3 text-black"
          type="text"
          placeholder="Nome"
          value={nome}
          required={true}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <div className="flex justify-between">
        <input
          className="sm:w-1/5 w-16 rounded sm:mr-0 mr-2 p-3 text-black appearance-none"
          type="text"
          placeholder="DDD"
          maxLength={2}
          value={ddd}
          required={true}
          onChange={(event) => setDDD(event.target.value)}
        />
        <input
          className="sm:w-3/4 w-96 rounded p-3 text-black"
          type="text"
          placeholder="Telefone"
          value={telefone}
          required={true}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div>

      <label>
        <input
          className="w-full rounded p-3 text-black"
          type="email"
          placeholder="E-mail"
          value={email}
          required={true}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <div className="flex justify-between">
        <input
          className="sm:w-8/12 w-80 sm:mr-0 mr-1 rounded p-3 text-black"
          type="text"
          placeholder="Cidade"
          value={cidade}
          required={true}
          onChange={(event) => setCidade(event.target.value)}
        />

        <input
          className="sm:w-1/4 w-16 rounded p-3 text-black"
          type="text"
          placeholder="Estado"
          value={estado}
          maxLength={2}
          required={true}
          onChange={(event) => setEstado(event.target.value)}
        />
      </div>

        <textarea
          className="w-full rounded sm:py-2 sm:px-2 h-40 sm:h-auto px-1  text-black resize-none"
          placeholder="Como podemos ajudar?"
          value={mensagem}
          required={true}
          onChange={(event) => setMensagem(event.target.value)}
        />

      <button className=" bg-bg-yellow-ct text-center sm:p-1 p-3 text-xl text-black font-bold mt-2 rounded"  type="submit">{textBtn}</button>
    </form>
  );
}

export default FormularioContato;
