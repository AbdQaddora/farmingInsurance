import React, { useState } from 'react';
import './Aside.css';
import CalcInsuranceCost from '../CalcInsuranceCost/CalcInsuranceCost';
import Modal from '../Modal/Modal';
import { useGlobalContext } from '../../Context/GlobalContext';
export default function Aside() {
    const { openModal, changeInnerModal, subscribeFunction, setWidth, setLength } = useGlobalContext();
    const handelModal = () => {
        changeInnerModal(<CalcInsuranceCost />);
        openModal();
    }

    return (
        <div className='aside'>
            <button className="showCalc" onClick={handelModal}>Calculate Insurance Cost</button>
            <Modal />
            <h3 className='title'>add your <span>land</span> <br /><span>Information</span></h3>
            <form>
                <p>
                    <input type="text" placeholder='land width in meters' name='width' onChange={(e) => {
                        setWidth(e.target.value);
                    }} />
                </p>
                <p>
                    <input type="text" placeholder='land Length in meters' name='length' onChange={(e) => {
                        setLength(e.target.value);
                    }} />
                </p>
                <p>
                    <button onClick={(e) => { e.preventDefault(); subscribeFunction(); }}>Subscribe</button>
                </p>
            </form>
        </div>
    )
}
