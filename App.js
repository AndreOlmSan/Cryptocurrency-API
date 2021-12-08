
import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Coin from './Coin.js'
import Trend from './Trend.js'

function App() {

  const [trends, setTrends] = useState([])
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    //Coins call
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(err => console.log(`There was an error retrieving the coin data ＞︿＜ ${err}`))

    //Trending call
    axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    .then(response => {
      setTrends(response.data.coins)
      console.log(response.data.coins)
    }).catch(error => console.log(`There was an error retrieving the trending data ＞︿＜ ${error}`))
  }, [])

  
  //Search
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="App">

      <header className="header">
        <h1 className="title">Crypto   ( •̀ ω •́ )✧</h1>
        <p className="subtitle">Data provided by <a href="https://www.coingecko.com/en/api/documentation">CoinGecko</a></p>
      </header>

      <main>

        {/* TRENDS */}
        <div className="trend-content">
          <h2>Trending 🔥</h2>
          <div>
            {trends.map(trend => {
              return (
                <Trend 
                  key={trend.item.id}
                  name={trend.item.name} 
                  image={trend.item.small} 
                  symbol={trend.item.symbol} 
                  price={trend.item.price_btc} 
                  cap={trend.item.market_cap_rank}
                />
              )
            })}
          </div>
        </div>
  
        {/* COINS */}
        <div className="coin-content">
          <h2>Top 100 Crypto 💯</h2>
          <div className="coin-search">
            <form>
              <input type="text" className="search" placeholder="Search..." onChange={handleChange}></input>
            </form>
          </div>
          {/* <table className="coin-table">
              <thead></thead>
              <tbody></tbody>
          </table> */}
          <div>
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
                />
              )
            })}   
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="catergory-content"></div>

      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App;
