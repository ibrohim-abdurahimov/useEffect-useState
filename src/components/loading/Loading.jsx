import React from 'react'
import "./Loading.css"

const Loading = ({ count = 3 }) => {
    return (
        <div className='loading'>
            {
                Array(count).fill("").map((_, inx) => (
                    <div key={inx} className="card">
                        <div className="img"></div>
                        <div className='body'>
                            <div className="title"></div>
                            <div className='price'></div>
                        </div>
                        <div className='body'>
                            <div className="title"></div>
                            <div className='star'></div>
                        </div>
                    </div>
                ))
            }
        </div>
        // <div className="lds-spinner">
        //     <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        // </div>
    )
}

export default Loading