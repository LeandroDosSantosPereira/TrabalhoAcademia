import React, { Component } from 'react';

class View3 extends Component {
  render() {
    return (
     <div id="tel3">
      <div id="inputBox">
      <input id="nomeTreino" placeholder="Nome do treino"/>
      <input id="nomeTreino"  placeholder="Número de repetições"/>
      <button id="bCadastrar">Cadastrar </button>
      <button id="bCancelar">Cancelar </button>
      </div>
     </div>
    );
  }
}

export default View3;