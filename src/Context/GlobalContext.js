import { useState, useContext, createContext } from 'react';
import Subscribe from '../Components/Subscribe/Subscribe';
import { SubscribeModal } from '../Components/Subscribe/Subscribe';
import errorImg from '../images/error.svg';

const GlobalContext = createContext({});
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export default function GlobalContextProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [innerModal, setInnerModal] = useState("");
    const [width, setWidth] = useState();
    const [length, setLength] = useState();
    const [location, setLocation] = useState({ lng: 0, lat: 0 });
    const [modalWithOutClose, setModalWithOutClose] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const changeInnerModal = (inner) => {
        setInnerModal(inner);
    }

    const subscribeFunction = () => {
        if (!width || width <= 0 || isNaN(width)) {
            changeInnerModal(
                <div className='modal-with-img error'>
                    <img src={errorImg} />
                    <br />
                    <h3>Please enter valid width 😢</h3>
                </div>
            )
        } else if (!length || length <= 0 || isNaN(length)) {
            changeInnerModal(
                <div className='modal-with-img error'>
                    <img src={errorImg} />
                    <br />
                    <h3>Please enter valid length 😢</h3>
                </div>
            )
        } else {
            setInnerModal(<SubscribeModal />)
        }
        openModal();
    }

    return (
        <GlobalContext.Provider value={{
            openModal,
            closeModal,
            changeInnerModal,
            setWidth,
            setLength,
            subscribeFunction,
            setLocation,
            setModalWithOutClose,
            showModal,
            innerModal,
            width,
            length,
            location,
            modalWithOutClose
        }}>
            {/* {console.log(`width : ${width} ,length: ${length} ,location:{lat:${location.lat} , lng:${location.lng}} `)} */}
            {children}
        </GlobalContext.Provider>
    )
}
