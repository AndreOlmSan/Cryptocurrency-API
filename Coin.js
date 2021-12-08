import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, cap, priceChange, volume }) => {
    return (
        <div className="coin-container">
            <div className="coin">
                <div className="coin-label">
                    <img className="coin-image" src={image} alt="coinlogo" />
                    <div className="coin-name">{name}</div> 
                </div>
                <div className="coin-symbol">{symbol}</div>
                <div className="coin-price"><p>Price </p>{price}</div>
                {priceChange < 0 ? (<div className="coin-percent red"><p>Change </p>{priceChange.toFixed(2)}%</div>) : (<div className="coin-percent green"><p>Change </p>{priceChange.toFixed(2)}%</div>)}
                <div className="coin-volume"><p>Volume </p>{volume.toLocaleString()} </div>
                <div className="coin-cap"><p>Market Cap </p>{cap.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default Coin
