import React, { Component } from 'react';
import './Menu.css';
import {Switch , Route, Link} from 'react-router-dom';
class View1 extends Component {
  render() {
    return (
     <div id="v1" >
     <div className="row">

     <Link to="/View3"className="col-4" id="m1">
        <div>
            <img src="imagem/segunda.png" id="im1"/>
        </div>
    </Link>

     <Link to="View3"className="col-4" id="m1">
        <div>
        <img src="imagem/terca.png" id="im1"/>
        </div>
    </Link>

     <Link to="View3"className="col-4" id="m1">
        <div>
        <img src="imagem/quarta.png" id="im1"/>
        </div>
    </Link>      
      </div>


      <div className="row">

          <Link to="View3"className="col-4" id="m1">
            <div>
                <img src="imagem/quinta.png" id="im1"/>
            </div>
          </Link>

          <Link to="View3"className="col-4" id="m1">
            <div>
            <img src="imagem/sexta.png" id="im1"/>
            </div>
          </Link>

          <Link to="View3"className="col-4" id="m1">
            <div>
            <img src="imagem/sabado.png" id="im1"/>
            </div>
          </Link>      
      </div>

      <footer className="page-footer font-small blue">

 
        <div className="footer-copyright text-center py-1">
          <a id="fechar" href="/Botoes"> VOLTAR</a>
        </div> 

      </footer>   



     

     </div>
    );
  }
}

export default View1;
