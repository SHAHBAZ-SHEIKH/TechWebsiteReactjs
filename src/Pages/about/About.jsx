import React from 'react'
import Banner from '../../components/banner/Banner'
import Experience from '../../components/expericence/Experience'
import Service from '../../components/service/Service'

function About() {


    return (
        <>
            <div>
                <Banner />
                <Experience />
                <div className="container">
                    <div className="row">
                        <Service icon="fa-solid fa-microphone-slash" title="Software Development" imgservice="assets/service-1.jpg" />
                        <Service icon="fa-solid fa-laptop" title="Expertise Leadership" imgservice="assets/service-2-1.jpg" />
                        <Service icon="fa-solid fa-microphone-slash" title="Leadership Reality" imgservice="assets/service-3-1.jpg" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
