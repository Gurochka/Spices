import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpiceSetMaker from 'App/pages/SpiceSetMaker'
import Cart from 'App/pages/Cart'

function App() {
  return (
    <Router>
      <Route path="/" exact component={SpiceSetMaker} />
      <Route path="/cart" component={Cart} />
    </Router> 
  )
}

export default App;
