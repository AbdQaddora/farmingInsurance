import { useState, useContext, createContext } from 'react';
import Subscribe from '../Components/Subscribe/Subscribe';
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
            setInnerModal(<p className='error'>Please enter valid width 😢</p>);
        } else if (!length || length <= 0 || isNaN(length)) {
            setInnerModal(<p className='error'>Please enter valid length 😢</p>);
        } else {
            setInnerModal(<Subscribe />)
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
            showModal,
            innerModal,
            width,
            length,
            location
        }}>
            {/* {console.log(`width : ${width} ,length: ${length} ,location:{lat:${location.lat} , lng:${location.lng}} `)} */}
            {children}
        </GlobalContext.Provider>
    )
}
