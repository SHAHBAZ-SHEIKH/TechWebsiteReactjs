import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import Banner from '../../components/banner/Banner.jsx'

function Product() {

    const [data, setData] = useState([])


    useEffect(() => {
        const fecthData = async () => {
            const fecthApi = await fetch("https://fakestoreapi.com/products/")
            const response = await fecthApi.json()
            console.log(response)
            setData(response)
            console.log(data)
        }

        fecthData()
    }, [])


    return (
        <>
            <div>
                <Banner />
                <div className="container">
                    <div className="row">
                        {
                            data.map((item,index) => {
                                return <ProductCard key={index} product={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product

