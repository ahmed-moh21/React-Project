import React,{useContext} from "react";
import Banner from './Banner';
import {CartContext} from "../Global/CartContext"
import {ProductsContext} from "../Global/ProductsContext"
import { Card,Icon,Image,Button,Popup, Item} from "semantic-ui-react";

const Products =()=>{

    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext); 
    
    return(
    <div className="container"> 
        <Banner />
       <div className="products">
           {products.map((product)=> {
              return( 
                    <div className="product" key={product.id}>
                        <Card
                         href='#card-example-link-card'
                        >
                            {product.status === "hot" ? <Popup
                            trigger={<Button> <Icon name='hotjar' />{product.status}</Button>}
                            content='Make sure you get the Discount'
                            hideOnScroll
                        /> :""}
 
                        {product.status === "new" ? <Popup
                            trigger={<Button><Icon name='certificate' /> {product.status}</Button>}
                            content='Be the first to get it' 
                            hideOnScroll
                        /> :""}

                        <Image src={product.image} wrapped ui={false} /> 

                            <Card.Content>
                                <Card.Header> {product.name} </Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='dollar sign' />
                                   Price : {product.price}
                                </a>
                            </Card.Content>
                            <Button  animated='fade'>
                                <Button.Content  visible>Pay It Now</Button.Content>
                                <Button.Content
                                onClick={()=> dispatch({type:"Add to Card", id: product.id, product })}
                                hidden>Add to Card</Button.Content>
                            </Button>
                        </Card>
                    </div>
               )
            })}
       </div>
    </div>
    );
}

export default Products;

