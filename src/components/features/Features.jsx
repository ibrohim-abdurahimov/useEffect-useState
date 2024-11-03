import React from 'react'
import "./Features.css"
import img1 from "../../assets/house.png"
import img2 from "../../assets/delivery.png"
import img3 from "../../assets/smile.png"

const Features = () => {
  return (
    <section className="features">
            <div className="container">
                <p className="features__subtitle">
                    FEATURES
                </p>
                <h2 className="features__title">Food with a New Passion</h2>
                <div className="features__wrapper">
                    <div className="features__card">
                        <div className="features__card-img">
                            <img src={img1} alt=""/>
                        </div>
                        <p className="features__card-title">Quality Food</p>
                        <p className="features__card-desc">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </div>
                    <div className="features__card">
                        <div className="features__card-img">
                            <img src={img2} alt=""/>
                        </div>
                        <p className="features__card-title">Food Delivery</p>
                        <p className="features__card-desc">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </div>
                    <div className="features__card">
                        <div className="features__card-img">
                            <img src={img3} alt=""/>
                        </div>
                        <p className="features__card-title">Super Taste</p>
                        <p className="features__card-desc">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Features