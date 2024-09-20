import React from 'react'
import Banner from '../../components/banner/Banner.jsx'
import Card from '../../components/card/Card.jsx'
import Experience from '../../components/expericence/Experience.jsx'
import Service from '../../components/service/Service.jsx'
import Sofitservice from '../../components/sofitservice/Sofitservice.jsx'
import Project from '../../components/project/Project.jsx'
import { ProjectCard } from '../../components/projectCard/ProjectCard.jsx'
import { useState,useEffect } from 'react'



function Home() {

 





  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          <Card icon="fa-solid fa-chart-simple" title="Improve Services" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <Card icon="fa-solid fa-gears" title="Marketing Strategy" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <Card icon="fa-solid fa-chart-pie" title="Project Analysis" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        </div>
      </div>
      <Experience />
      

      <div className="container">
        <div className="row">
          <Service icon="fa-solid fa-microphone-slash" title="Software Development" imgservice="../../public/assets/service-1.jpg" />
          <Service icon="fa-solid fa-laptop" title="Expertise Leadership" imgservice="../../public/assets/service-2-1.jpg" />
          <Service icon="fa-solid fa-microphone-slash" title="Leadership Reality" imgservice="../../public/assets/service-3-1.jpg" />
        </div>
      </div>

      <Sofitservice/>

      <Project/>
      <div className="container">
        <div className="row">
          <ProjectCard title="Design Management" imagProject ="../../public/assets/project1.jpg" />
          <ProjectCard title="Bussiness Management" imagProject ="../..//public/assets/project2.jpg" />
          <ProjectCard title="Design Management" imagProject ="../..//public/assets/project3.jpg" />
          <ProjectCard title="Bussiness Management" imagProject ="../..//public/assets/project4.jpg" />
          <ProjectCard title="Design Management" imagProject ="../../public/assets/project5.jpg" />
          <ProjectCard title="Bussiness Management" imagProject ="../../public/assets/project6.jpg" />
        </div>
      </div>
      
    </>
  )
}

export default Home
