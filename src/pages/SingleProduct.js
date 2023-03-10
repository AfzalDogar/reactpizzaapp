import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {

 const [product, setProduct] =  useState({});

 const params = useParams();
 const navigate = useNavigate();

 useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
    .then(response => response.json())
     .then(product => {
        setProduct(product);
     });
},[]);

  return (
    <div className='container mx-auto mt-12'>
      <button className='mb-12 font-bold'onClick={ () => navigate(-1)}>Back</button>
      <div className='flex'>
        <img src={product.image} alt='peproni'/>
        <div className='ml-16'>
            <h1 className='text-xl font-bold'>{product.name}</h1>
            <div className='text-md'>{product.size}</div>
             <div className='font-bold mt-2'>PK {product.price}</div>
             <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
        </div>
      </div>
        
    </div>
  )
}

export default SingleProduct;
