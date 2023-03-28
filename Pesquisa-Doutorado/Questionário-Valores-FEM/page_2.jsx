import React from "react";

function Opcao(props) {
  return (
    <label>
      <input type="radio" name={props.nome} value={props.valor} />
      {props.children}
    </label>
  );
}

function GrupoOpcoes(props) {
  const opcoes = ["Não se parece nada comigo", "Se parece pouco comigo", "Se parece mais ou menos comigo", "Se parece comigo", "Se parece muito comigo"];
  
  return (
    <div>
      <h2>{props.titulo}</h2>
      {opcoes.map((opcao, index) => (
        <Opcao nome={props.nome} valor={index} key={index}>
          {opcao}
        </Opcao>
      ))}
    </div>
  );
}

function Formulario() {
  return (
    <form action="page3.html" method="post">
      <GrupoOpcoes titulo="É importante para ela desenvolver suas próprias opiniões:" nome="opinioes" />
      <GrupoOpcoes titulo="É importante para ela descobrir as coisas por si mesma:" nome="descobrir" />
      <GrupoOpcoes titulo="É importante para ela tomar suas próprias decisões a respeito da sua vida:" nome="decisoes" />
      <GrupoOpcoes titulo="É importante para ela ser livre para escolher por ela mesma o que fazer:" nome="liberdade" />
      <GrupoOpcoes titulo="É importante para ela assumir riscos que fazem a vida ficar excitante?" nome="assumir_riscos" />
      <GrupoOpcoes titulo="É importante para ela ter todos os tipos de experiências novas?" nome="experiencias_novas" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;