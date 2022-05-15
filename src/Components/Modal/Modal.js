import React from 'react'
import './Modal.css'
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../../Context/GlobalContext';
export default function Modal() {
    const { innerModal, showModal, closeModal } = useGlobalContext();
    return (
        <div className={`modal-shadow ${showModal && "show"}`}>
            <div className='modal'>
                <IoClose className='close' onClick={closeModal} />
                {innerModal}
            </div>
        </div>
    )
}
