import React, {  Component, useState } from 'react'; // importtant
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // important
import './index.css'; //important
import Nav from './componant/Nav';
import ModalExampleModal from "./componant/Notfound"
import Products from './componant/Products';
import Cart from './componant/Cart';
import ProductsContextProvider from "./Global/ProductsContext"
import CreateContextProvider from './Global/CartContext';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import preload from "./Asset/preload.gif"


//start App function 

class App extends Component{

  constructor(){
    super();
    setTimeout(
      function(){
        let loader = document.getElementById("loader")
        loader.classList.add("load")
      }, 5000);

  }

  render(){
    return(
      <>
      {/* Html React code */}
      <ProductsContextProvider>
        <CreateContextProvider>
          <Router>
           <Nav />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={ModalExampleModal} />
            </Switch>
          </Router>
          <div id="loader"></div>
        </CreateContextProvider>
      </ProductsContextProvider>
      
      </>
    );
  }
};

export default App;

