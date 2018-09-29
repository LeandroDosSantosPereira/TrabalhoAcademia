import React, { Component } from 'react';
import {Switch , Route, Link} from 'react-router-dom';


// SPLASH SCREEN

class View2 extends Component {
  render() {
   
    
    function chamar()
    {    
    window.location.href = "/Botoes";
    }
    
    var n = 0;    
    window.setInterval(function(){
      n++;
      if(n==5){
      chamar();
              }
    },1000);
   

    return (
     <div id="splash">
    <img id="ico" src="imagem/icone.png"/> 
     </div>
    );
  }
}

export default View2;