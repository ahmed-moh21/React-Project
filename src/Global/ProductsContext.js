import React,{createContext,useState} from "react";
import camera from "../Asset/camera.jpg"
import headphones from "../Asset/headphones.jpg"
import iphone from "../Asset/iphone.jpg"
import perfume from "../Asset/perfume.jpg"
import rings from "../Asset/rings.jpg"
import shoes from "../Asset/shoes.jpg"
import watch from "../Asset/watch.jpg"
import microphone from "../Asset/microphone.jpg"
import micrphone from "../Asset/micrphone.jpg"

export const ProductsContext = createContext();


 
const ProductsContextProvider=(props)=>{

    const [products] =useState([
        {id :1 , name:"Camera" , price:300 , image:camera , status:"hot"},
        {id :2 , name:"Head Phones" , price:30 , image:headphones , status:"new"},
        {id :3 , name:"Iphone" , price:400 , image:iphone , status:"hot"},
        {id :4 , name:"Perfum" , price:40 , image:perfume , status:"new"},
        {id :5 , name:"Rings" , price:100 , image:rings , status:"new"},
        {id :6 , name:"Shoes" , price:80 , image:shoes , status:"hot"}, 
        {id :7 , name:"Watch" , price:120 , image:watch , status:"new"},
        {id :8 , name:"Microphone" , price:350 , image:microphone , status:"hot"},
        {id :9 , name:"LoCal miCrophone" , price:250 , image: micrphone , status:"new"}
    ]);

    return(
        
            <ProductsContext.Provider value={{products:[...products]}}>
                {props.children}
            </ProductsContext.Provider>
       
    );
}

export default ProductsContextProvider;