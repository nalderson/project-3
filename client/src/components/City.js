import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

export default function City({ match }) {

  const cityname = match.params.cityname
  const [city, updateCity] = useState({})

  useEffect(() => {
    async function fetchCityData() {
      try {
        const { data } = await axios.get(`/api/cityscapes/discover/${cityname}`)
        updateCity(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCityData()
  }, {})
  console.log(cityname)

  const history = useHistory()

  const routeChangeTTD = () => {
    const pathTTD = '/cityscapes/discover/:cityname/thingstodo'
    history.push(pathTTD)
  }
  const routeChangeFlights = () => {
    const pathFlights = '/cityscapes/flights'
    history.push(pathFlights)
  }
  const routeChangeRestaurants = () => {
    const pathRestaurants = '/cityscapes/discover/:cityname/restaurants'
    history.push(pathRestaurants)
  }
  const routeChangeExperiences = () => {
    const pathExperiences = '/cityscapes/discover/:cityname/experiences'
    history.push(pathExperiences)
  }

  return <section >
    <div className="name-image-about">
      <h1>{city.city}</h1>
      <img src={city.image} alt={city.name} />
      <p>{city.about}</p>
    </div>
    <div className="search-buttons">
      <div className="things-to-do">
        <h2>Search Things to Do</h2>
        <img />
        <button onClick={routeChangeTTD}>
          Search
        </button>
      </div>
      <div className="flights">
        <h2>Search Flights</h2>
        <img />
        <button onClick={routeChangeFlights}>
          Search
        </button>
      </div>
      <div className="restaurants">
        <h2>Search Restaurants</h2>
        <img />
        <button onClick={routeChangeRestaurants}>
          Search
        </button>
      </div>
      <div className="experiences">
        <h2>Search Experiences</h2>
        <img />
        <button onClick={routeChangeExperiences}>
          Search
        </button>
      </div>
    </div>

  </section>
}