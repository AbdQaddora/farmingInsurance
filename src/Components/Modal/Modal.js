import React from 'react'
import './Modal.css'
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../../Context/GlobalContext';
export default function Modal() {
    const { innerModal, showModal, closeModal, modalWithOutClose } = useGlobalContext();
    return (
        <div className={`modal-shadow ${showModal && "show"}`}>
            <div className='modal'>
                {!modalWithOutClose && <IoClose className='close' onClick={closeModal} />}
                {innerModal}
            </div>
        </div>
    )
}
