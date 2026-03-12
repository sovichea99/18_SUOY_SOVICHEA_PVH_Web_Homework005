import React from 'react'
import ProductList from '../client/ProductComponent'
import ProductComponent from '../client/ProductComponent'

export default function MainComponent({data}) {
  return (
    <div className='max-w-6xl mx-auto relative mt-3'>
        <ProductComponent data={data}/>
    </div>
  )
}
