import React from 'react'
import { PropsProductItem } from './ProductItems.type'
import { PropsFromReducer, connector } from 'Redux/ConnectReducer'

const ProductItem = ({ item, actionChooseModel }: PropsProductItem & PropsFromReducer) => {
    const { name, imgSrc_jpg } = item;
    return (
        <div className='card p-2 my-2' style={{ width: 200, height: 300 }}>
            <div style={{ height: '73%' }}>
                <img src={imgSrc_jpg} alt="" className='img-fluid ' />
            </div>
            <div >
                <p>{name}</p>
                <button className='btn btn-success w-100' onClick={() => { actionChooseModel(item.type, item.imgSrc_png) }}>Thử đồ</button>
            </div>

        </div>
    )
}

export default connector(ProductItem)