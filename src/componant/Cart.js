import React,{useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import {Icon,Statistic,Image,Card} from "semantic-ui-react"
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function TableExampleCollapsing (props){

    const {shoopingCart,totalPrice,qty,dispatch} = useContext(CartContext);

    /* handel  TOAST  */ 

    async function handleToken(token){
        const product = { name: 'All product' , price: totalPrice}
        const response = await axios.post("https://ry7v05l6on.sse.codesandbox.io/checkout", {product,token});
        
        const { status } = response.data;
    
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" }); 

            dispatch({type: 'EMPTY'}); 
            props.history.push('/');
          } else {
            toast("Success payment 🦄 yOu are welcOme", {
                position: "top-right",
                autoClose: 5000,
                pauseOnFocusLoss:false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"dark",
                type: "success"
                });
            
            dispatch({type: 'EMPTY'});
            props.history.push('/');
            
          }
    
      }
    
    return(
        <div className="cart-container">
            <div className="cart-detailes" style={{marginTop:"100px"}}>
                {shoopingCart.length > 0 ?  
                  shoopingCart.map( cart=> (
                      <div className="cart" key={cart.id}>
                           <span className="cart-image">
                              <Image src={cart.image}  />
                          </span>
                          <span className="cart-product-name">
                              {cart.name}
                          </span>
                          <span className="cart-product-price">
                             <Icon name='dollar sign' />{cart.price}
                          </span>
                          <span className="inc"
                          onClick={()=>dispatch({
                              type:'INC' , id: cart.id , cart
                          })}
                          >
                             <Icon name='plus' />
                          </span>
                          <span className="product-quantity">
                                <Statistic size='mini'>
                                        <Statistic.Value>{cart.qty}</Statistic.Value>
                                </Statistic>
                          </span>
                          <span className="minus"
                          onClick={()=>dispatch({
                            type:'DEC' , id: cart.id , cart
                           })}
                          >
                             <Icon name='minus circle' />
                          </span>
                          <span className="product-total-price">
                          <Statistic size='mini'>
                             <Statistic.Value>
                                <Icon name='dollar sign' />
                                 {cart.price * cart.qty}
                              </Statistic.Value>
                          </Statistic>
                          
                          </span>
                          <span className="delet-product"
                            onClick={()=>dispatch({
                                type:'DELET' , id: cart.id , cart
                            })}
                          >
                             <Icon name='trash alternate' />
                          </span>
                      </div>
                  ))
                : <p className="cart-error">sorry your cart is currently empty</p>}
            </div>

            <Card
            href='#card-example-link-card'
            id="cart">
                <Card.Content header='Cart Summary' />
                <Card.Content extra>
                   Total item : {qty}
                </Card.Content>

                <Card.Content extra>
                    Total price :
                    <Icon name='dollar sign' />{totalPrice}
                </Card.Content>

                {/*payment by react stripe 08/2022  */}
                
                <StripeCheckout 
                style={{width:"100%"}}
                stripeKey='pk_test_qblFNYngBkEdjEZ16jxxoWSM'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name='All Products'
                >
                </StripeCheckout>
            </Card>
            {/* <ToastContainer
                    position="top-right"
                  //  autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    pauseOnFocusLoss={false}
                    
             /> */}
             
        </div>
    );
}
export default TableExampleCollapsing;

