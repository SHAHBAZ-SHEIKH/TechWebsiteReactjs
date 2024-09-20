import React from 'react'
import './ProductCard.css'



function ProductCard({product:{image,category,title,price,rating}}) {
    console.log(image,category,title,price,rating)
    



    return (
        
                <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="itemContainer">
                        <img className='productImg' src={image} alt="" />
                        <div className="categoryElement">{category}</div>
                        <div className="line"></div>
                        <div className="categoryTitle">{title.slice(1,20)}....</div>
                        <div className="ratingAndPrice">
                            <div className="rating">
                                ⭐Rs{rating.rate} | {rating.count}K
                            </div>
                            <div className="price">
                                {price}
                            </div>

                        </div>





                    </div>

                </div>

                
            
    )
}

export default ProductCard
