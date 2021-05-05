import React from 'react';
import Cart from './components/Cart/Cart.js';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
