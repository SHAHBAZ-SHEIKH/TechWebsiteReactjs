import React from 'react'
import { ProjectCard } from '../../components/projectCard/ProjectCard'
import Banner from '../../components/banner/Banner'
import Project from '../../components/project/Project'

function Service() {


    return (
        <>
            <Banner />
            <Project/>
            <div className="container">
                <div className="row">
                    <ProjectCard title="Design Management" imagProject="assets/project1.jpg" />
                    <ProjectCard title="Bussiness Management" imagProject="assets/project2.jpg" />
                    <ProjectCard title="Design Management" imagProject="assets/project3.jpg" />
                    <ProjectCard title="Bussiness Management" imagProject="assets/project4.jpg" />
                    <ProjectCard title="Design Management" imagProject="assets/project5.jpg" />
                    <ProjectCard title="Bussiness Management" imagProject="assets/project6.jpg" />
                </div>
            </div>
        </>
    )
}

export default Service
