import React from 'react'
import Products from '../components/Products';

function ProductsPage() {
  return (
    <div>
       <h1 className='font-bold text-center text-yellow-500 hover:text-blue-600'> This is product page</h1>
         <Products/>
    </div>
  )
}

export default ProductsPage;
