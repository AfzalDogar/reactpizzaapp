// import React from 'react';
// import { useContext, useState,useEffect } from 'react';
// import { CartContext } from '../CartContext';

// const Cart = () => {
//    const[products, setProducts] =  useState([])
//    const {cart} = useContext(CartContext);

//    useEffect(() => {
//        if(!cart.items){
//         return;
//       }
       
//       fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {
//         method: 'POST',
//         headers : {
//           'content-Type': 'application/json'
//         },

//         body: JSON.stringify({ ids: Object.keys(cart.items)})
//       }).then(res => res.json())
//         .then(products => {
//           setProducts(products);
//         })
//     },[cart]);
//   return (
//     <div className='container mx-auto lg:w-1/2 w-full pb-24'>
//     <h1 className='my-12 font-bold '>cart items</h1>

//       <ul>
//         {
//                 products.map(product => {
//                   return (  
//                     <li className='mb-12'>
//                     <div className='flex items-center justify-between'>
//                     <div className='flex items-center'>
//                      <img className='h-16' src={product.image} alt='peproni'/>
//                     <span className='font-bold ml-4 w-48'>{product.name}</span>
//                     </div>
//                     <div>
//                       <button className='bg-yellow-500 px-4 py-2  rounded-full '>-</button>
//                     <b className='px-4'>2</b>
//                          <button className='bg-yellow-500 px-4 py-2  rounded-full '>-</button>
//                      </div>
           
//                      <span> PK{product.price}</span>
           
//                      <button className='bg-red-500 px-4 py-2 rounded-full text-white'>Delete</button>
//            </div>
           
           
//                  </li>
//                   )

              
//                 })
//               }
//        </ul>
//       <hr className='my-6'/>

//       <div className='text-right'>
//        <b>Grand Total</b> PK 1000
//         </div>
//         <div className='text-right mt-6'> 
             
//              <button className='bg-yellow-500 px-4 py-2 rounded-full'>Order Now</button>
//         </div>
      
//     </div>
//   )
// }

// export default Cart;

