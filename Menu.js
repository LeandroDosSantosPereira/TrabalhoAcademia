import React, { Component } from 'react';
 import {Switch , Route, Link} from 'react-router-dom';
import Botoes from './Botoes';
import View1 from './View1';
import View2 from './View2';
import View3 from './View3';
import View4 from './View4';
//ROTAS***********************************
class Menu extends Component {
  
  render() {
    return (
     <div>
     
     <main>
              <Switch>
                  <Route exact path="/View1"component={View1}/>
                  <Route exact path="/View2"component={View2}/>
                  <Route exact path="/View3"component={View3}/>
                  <Route exact path="/View4"component={View4}/>
                  <Route exact path="/Botoes"component={Botoes}/>
                  <Route exact path="/" component={View2}/>
              </Switch>
        </main>
         
     </div>
    );
  }
}


export default Menu;
