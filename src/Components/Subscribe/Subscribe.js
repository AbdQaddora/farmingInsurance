import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import './Subscribe.css'
export default function Subscribe() {
    const { length, width } = useGlobalContext();
    return (
        <div className='subscribe'>
            <h3>Are you sure ?</h3>
            <p>this will cost you {`${(length * width * 0.5) / 1000} ETH `}</p>
            <button className='confirm-btn'>Confirm</button>
        </div>
    )
}
