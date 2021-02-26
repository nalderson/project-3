import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Flights from './components/Flights'
import FlightResults from './components/FlightResults'


import City from './components/City'

import UpdateCity from './components/UpdateCity'
import PostCity from './components/PostCity'
import Map from './components/Map'

console.log('hi')



import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project-3/register" component={Register}/>
      <Route exact path="/project-3/login" component={Login}/>
      
      <Route exact path="/project-3/cityscapes/map" component={Map}/>
      <Route exact path="/project-3/cityscapes/discover" component={Discover}/>
      <Route exact path="/project-3/cityscapes/discover/postcity" component={PostCity} />
      <Route exact path="/project-3/cityscapes/flights" component={Flights} />
      <Route exact path="/project-3/cityscapes/flights/results" component={FlightResults} />
      <Route exact path="/project-3/cityscapes/discover/:city" component={City} />
      <Route exact path="/project-3/cityscapes/discover/:city/updatecity" component={UpdateCity} />

      
    </Switch>
  </BrowserRouter>
)

export default App