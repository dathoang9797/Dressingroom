import React from 'react'
import Footer from 'Layouts/Footer'
import Header from 'Layouts/Header'
import Categories from 'Components/Categories'
import Products from 'Components/Products'
import Model from 'Components/Model'

const Home = () => {
    return (

        <>
            <Header />
            <div >
                <div className="row">
                    <div className="col-6">
                        <Categories />
                        <Products />
                    </div>
                    <div className="col-6">
                        <Model />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home