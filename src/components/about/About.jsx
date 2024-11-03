import React from 'react'
import "./About.css"
import img from "../../assets/about us.png"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="about__text">
                        <p className="about__subtitle">
                            ABOUT US
                        </p>
                        <p className="about__title">
                            Food Stalls with Persons but  to  Product marketing plane catlogues etc to.
                        </p>
                        <p className="about__desc">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.
                        </p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About