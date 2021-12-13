import React, { useEffect, useState } from 'react';
import './App.css';
import AllCountry from './Components/AllCountry/AllCountry';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        console.log(data)
      })
  }, [])
  const handleCountry = (countries) => {
    console.log('added', countries);

    const newCart = [...cart, countries]
    setCart(newCart);
    console.log(newCart);

  }
  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Country added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {
        countries.map(countries => {
          return <AllCountry countries={countries} handleCountry={handleCountry} />
        })
      }
    </div>
  );
}

export default App;
