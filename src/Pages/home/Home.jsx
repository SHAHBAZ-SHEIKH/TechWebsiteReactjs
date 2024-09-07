import React from 'react'
import Banner from '../../components/banner/Banner.jsx'
import Card from '../../components/card/Card.jsx'
import Experience from '../../components/expericence/Experience.jsx'

 function Home() {
    

    return (
        <>
          <Banner/> 
          <div className="container">
            <div className="row">
              <Card icon="fa-solid fa-chart-simple" title="Improve Services" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              <Card icon="fa-solid fa-gears" title="Marketing Strategy" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              <Card icon="fa-solid fa-chart-pie" title="Project Analysis" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          
            </div>
          </div>
          <Experience/>
        </>
    )
}

export default Home
