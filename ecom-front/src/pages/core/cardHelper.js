import React from "react"
import { Link } from "react-router-dom"
import ShowImage from "./ShowImage"
import moment from 'moment'



export const addItemToCart = (product,next) =>{
 let cart = []
 if(typeof window !== "undefined"){
   if(localStorage.getItem('cart')){
     cart = JSON.parse(localStorage.getItem('cart'));
   }
   cart.push({
     ...product,
     count: 1
   });

   cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
    return cart.find(p => p._id === id);
});

   localStorage.setItem('cart', JSON.stringify(cart));
   //calback function run now
   next();
 }

};

export const showCartLength = () => {
  if(typeof window !== "undefined"){
    if(localStorage.getItem('cart')){
      return JSON.parse(localStorage.getItem('cart')).length
  }
}
}

export const getItemFromCart = () =>{
    if(typeof window !== 'undefined'){
      if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart'))
      }else{
        return []
      }
    }
}


export const updateQuantity = (productId, count) =>{
  let cart = []
  if(typeof window !== 'undefined'){
    if(localStorage.getItem('cart')){
      cart =  JSON.parse(localStorage.getItem('cart'))
    }
    cart.map((product,index) => {
      if(product._id === productId){
        cart[index].count = count;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}