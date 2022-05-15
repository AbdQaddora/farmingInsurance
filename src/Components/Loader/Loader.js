import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import './Loader.css';
export default function Loader() {
    return (
        <div className='loader'>
            <SpinnerDotted size={`70`} thickness={`250`}/>
        </div>
    )
}
