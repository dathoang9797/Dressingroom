import ProductItem from 'Components/ProductItem/ProductItem'
import React from 'react'
import { connector, PropsFromReducer } from 'Redux/ConnectReducer'
const Products = ({ productList, chooserCategory }: PropsFromReducer) => {
    return (
        <div className="row">
            {productList.filter(item => item.type === chooserCategory).map((product, index) => {
                return (<div className="col-4" key={index}>
                    <ProductItem item={product} />
                </div>)
            })}

        </div>
    )
}

export default connector(Products);