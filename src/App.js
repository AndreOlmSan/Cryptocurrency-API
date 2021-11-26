
import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Coin from './Coin.js'

function App() {

  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
      
    }).catch(error => console.log(`There was an error retrieving the data ＞︿＜ ${error}`))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="App">
      <h1 className="title">Crypto   ( •̀ ω •́ )✧</h1>
      <p className="subtitle">Data provided by <a href="https://www.coingecko.com/en/api/documentation">CoinGecko</a></p>
      <div className="coin-search">
        <form>
          <input type="text" className="search" placeholder="Search..." onChange={handleChange}></input>
        </form>
      </div>
      <div className="labels">
        <p>Logo</p>
        <p className="labels-name">Name</p>
        <p>Abbrev.</p>
        <p>Price</p>
        <p>Volume</p>
        <p>Change</p>
        <p>Market Cap</p>
      </div>
      {filteredCoins.map(coin => {
        return (
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol} 
        volume={coin.total_volume}
        price={coin.current_price} 
        priceChange={coin.price_change_percentage_24h} 
        cap={coin.market_cap}
        ></Coin>)
      })}
    </div>
  );
}

export default App;
