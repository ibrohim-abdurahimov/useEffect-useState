import React, { useEffect, useState } from 'react'
import "./Menu.css"
import axios from 'axios'
import { IoStar } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Loading from '../loading/Loading';

const BASE_URL = "https://dummyjson.com"

const Menu = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${BASE_URL}/products`)
            .then(res => setProducts(res.data.products))
            .finally(() => setLoading(false))
    }, [])

    const productItem = products?.map((pro) => (
        <div key={pro.id} className="menu__card">
            <div className="menu__img">
                <img src={pro.images[0]} alt="" />
            </div>
            <div className="menu__body">
                <div className="menu__info">
                    <p className="info__title">{pro.title}</p>
                    <p className="info__price">{pro.price}$</p>
                </div>
                <div className="menu__icon">
                    <div className="menu__cart">
                        <FaPlus />
                    </div>
                    <div className="star__icon">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <section className='menu'>
            <div className="container">
                <p className="menu__subtitle">
                    MENU
                </p>
                <p className="menu__title">Food Full of treaty Love</p>
                <p className="menu__dec">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.
                </p>
                <div className='loading'>
                    {loading && <Loading/>}
                </div>
                <div className="menu__wrapper">
                    {productItem}
                    <div className="menu__btn">
                </div>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Menu