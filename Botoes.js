import React, { Component } from 'react';
import {Switch , Route, Link} from 'react-router-dom';


// BOTÕES DA PRIMEIRA TELA
class Botoes extends Component {
  
  
 
    render() {
      return (
       <div id="tBody">     
                  


   <div className="grid-container">

   <Link to="/View1" className="bt1">
    <div  >  
      <img src="imagem/adicionar.png" id="adicionar"/> 
    </div>
  </Link>

  <Link to="/View1" className="bt2">
  <div>
  		<img src="imagem/atualizar.png" id="atualizar"/>
  </div>
  </Link>

 <Link to="/View1" className="bt3">
    <div>
  		<img src="imagem/buscar.png" id="buscar"/>
  </div>
  </Link>

 <Link to="/View1" className="bt4">
  <div>
  		<img src="imagem/deletar.png" id="deletar"/>
  </div>
  </Link>


</div>


<footer className="page-footer font-small blue">

 
  <div className="footer-copyright text-center py-1">
    <a id="fechar" href="#"> FECHAR</a>
  </div> 

</footer>     
       </div>      
   
      );   
     
    }
   
   
        
  }
 
  export default Botoes;
  