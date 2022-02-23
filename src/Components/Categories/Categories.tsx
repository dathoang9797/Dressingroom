import React from 'react'
import { connector, PropsFromReducer } from 'Redux/ConnectReducer'

const Categories = ({ chooserCategory, categoriesList, actionChooseCategory }: PropsFromReducer) => {
    return (
        <div className='btn-group'>
            {categoriesList.map((category, index) => {
                return (<button className={chooserCategory === category.type ? 'btn btn-primary' : 'btn btn-secondary'} key={index} onClick={() => { actionChooseCategory(category.type) }}>{category.showName}</button>)
            })}
        </div>
    )
}

export default connector(Categories)