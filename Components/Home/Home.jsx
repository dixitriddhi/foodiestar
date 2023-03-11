import React from 'react'
import './Home.css'
import video from "../../Assets/Bg.mp4"
import {MdFoodBank} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            <h1>Feeling Hungry ...???</h1>
          </span>

          <h2 className="homeTitle">
            <h3>Search for your favorite food here..</h3>
          </h2>

        </div>

        <div className="cardDiv grid">
          <div className="FoodInput">
            {/* <label htmlFor="Food">Enter Food :</label> */}
            <div className="input flex">
              <input type="text" placeholder='What you want to Eat ..?' />
              <MdFoodBank className="icon"/>
            </div>
          </div>
          <div className="destinationInput">
            {/* <label htmlFor="Place">Enter Location :</label> */}
            <div className="input flex">
              <input type="text" placeholder='Where are you ..?' />
              <GoLocation className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home