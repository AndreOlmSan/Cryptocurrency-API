import React from 'react'
import './Coin.css'

const Trend = ({ name, image, symbol, price, cap }) => {
    return(
        <div className="trend-container">
            <div className="trend">
            <div className="trend-label">
                    <img className="trend-image" src={image} alt="trendlogo" />
                    <div className="trend-name">{name}</div> 
                </div>
                <div className="trend-symbol">{symbol}</div>
                {/* <div className="trend-price"><p>Price</p>{price}</div> */}
                <div className="trend-cap"><p>Market Cap Rank</p>{cap}</div>
            </div>
        </div>
    )
}

export default Trend