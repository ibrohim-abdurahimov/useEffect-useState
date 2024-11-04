import React, { useEffect, useState } from 'react'
import "./Menu.css"
import axios from '../../api'
import { IoStar } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Loading from '../loading/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useFetch } from '../../hooks/useFetch';



const Menu = () => {
    // const [products, setProducts] = useState(null)
    // const [loading, setLoading] = useState(false)
    const count = 3
    const [category, setCategory] = useState("/")
    const [offset, setOffset] = useState(1)
    const { data, error, loading } = useFetch(`/products${category}`, { limit: offset * count }, [offset, category])
    const { data: categories } = useFetch("/products/category-list")

    useEffect(()=>{
        setOffset(1)
    }, [category])
    useEffect(() => {
        Aos.init()
    }, [])

    // useEffect(() => {
    //     setLoading(true)
    //     axios
    //         .get(`/products`, {
    //             params: {
    //                 limit: offset * 3
    //             }
    //         })
    //         .then(res => setProducts(res.data.products))
    //         .finally(() => setLoading(false))
    // }, [offset])

    // useEffect(()=>{
    //     axios.get(`/products/category-list`)
    // })

    const productItem = data?.products?.map((pro) => (
        <div data-aos="flip-down" key={pro.id} className="menu__card">
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
    const categoryItem = categories?.map((item) => (
        <li className={`${`/category/${item}`=== category? "active" : "menu__item"}`} onClick={() => setCategory(`/category/${item}`)} key={item}>
            {item}
        </li>
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
                
                <div className="menu__category">
                    <li className={`${`/`=== category? "active" : "menu__item"}`} onClick={() => setCategory("/")}>All</li>
                    {categoryItem}
                </div>
                {loading && <Loading count={count}/>}
                <div className="menu__wrapper">
                    {productItem}
                </div>
                {
                    offset * count < data?.total &&
                    <div>
                        <button disabled={loading} onClick={() => setOffset(p => p + 1)} className="menu__btn">{loading ? "Loading..." : "See More"}</button>
                    </div>
                }
            </div>
        </section>
    )
}

export default Menu