import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, cap, priceChange, volume }) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img className="coin-image" src={image} alt="image" />
                    <div className="coin-name">{name}</div>
                    <div className="coin-icon">{symbol}</div>
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume"> ${volume.toLocaleString()} </p>
                    {priceChange < 0 ? 
                    (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>) 
                    : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-cap">${cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
