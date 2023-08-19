import React,{useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import { Button} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {CartContext} from "../Global/CartContext"

 
function Nav(){ 

    const {qty} = useContext(CartContext)
    return(
    <div className="father">
        <div className="nav-div ">
           
                <div className="nav-logo ">
                    <ul>
                        <li> <Link id="logo" to="/"> PakExpress </Link> </li>
                        <hr />
                    </ul>
                </div>
                <div className="nav-link  ">
                    <div className="Nlink">
                       <Link to="cart">
                            <Button animated='vertical'>
                                <Button.Content className="shopp" hidden>Shop</Button.Content>
                                <Button.Content visible>
                                <FontAwesomeIcon icon={faShoppingCart } />
                                </Button.Content>
                            </Button>
                        </Link> 
                    </div>
                    <div className="Nlink1"> 
                        <ul>
                            <li>  <span id="cartcounts" className="cartcount">
                                {qty}
                             </span> </li>
                        </ul>
                    </div>
                </div>
       
        </div>
    </div>
    );
};
export default Nav;