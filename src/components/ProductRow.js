import React from 'react'

export default function ProductRow({name, price}) {
    return (
        <div >
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}