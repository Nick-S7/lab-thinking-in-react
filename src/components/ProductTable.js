import React from 'react'
import ProductRow from './ProductRow'


export default function ProductTable({ products }) {


    return (
        <>
            <div>
                <div>
                    <div><b>Name</b></div>
            </div>
                {products?.map((product) => {
                    return <ProductRow key={product.id} name={product.name} price={product.price} />
                })}
            </div>
        </>
    )
}