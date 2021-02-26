import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Restaurants({ match }) {
  const [restaurantData, updateRestaurantData] = useState({})
  const [loading, updateLoading] = useState(true)
  const city = match.params.city
  console.log('print the city: ' + city)
  const [cities, updateCities] = useState({})


  useEffect(() => {

    async function getData() {

      try {



        const { data } = await axios.get('https://api.foursquare.com/v2/venues/explore?client_id=S4D23OXL5DKZ3F0PNZZCU2SXY4BMPNADQXCZ4HBQ5J0BBVZX&client_secret=DQLUOFKVBLNFJCFZHE4CTM5PVI22YIO24IC5PWPLKSIF3BNW&near=Prague&section=food&limit=20&v=20210218')

        updateRestaurantData(data.response.groups[0].items)
        updateLoading(false)
      


      } catch (err) {
        console.log(err)
      }
    }
    getData()

    async function fetchCityData() {
      try {
        const { data } = await axios.get(`/api/cityscapes/${city}`)
        updateCities(data)


      } catch (err) {
        console.log(err)
      }
    }
    fetchCityData()
  }, [])


  if (loading) {
    return <ClipLoader loading={loading} size={100} />
  }




 


  return <div>

    <div className="city-image">
      <h1>{cities.city}</h1>
      <img src={cities.image} alt={cities.name} />
    </div>


    <div className="container">
      <h1>Look for the best restaurants in the city </h1>
      <div className="columns is-multiline is-mobile"></div>


      {
        restaurantData.map((restaurant, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">



            <div className="card">
              <div className="card-content">
                <p className="title is-4">{restaurant.venue.name}</p>
                <p className="subtitle is-6">{restaurant.venue.categories[0].name}</p>
                <p className="subtitle is-6">{restaurant.venue.location.address}</p>


              </div>
            </div>

          </div>
        })
      }
    </div>
  </div>


}