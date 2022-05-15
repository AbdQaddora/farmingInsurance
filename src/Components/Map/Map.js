import React, { useEffect, useState, useRef } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps';

import '@tomtom-international/web-sdk-maps/dist/maps.css';
import './Map.css';

import { useGlobalContext } from '../../Context/GlobalContext';
import Modal from '../Modal/Modal';
export default function Map() {
    const { openModal, changeInnerModal, location, setLocation } = useGlobalContext();

    const mapElement = useRef();
    const [map, setMap] = useState();
    useEffect(() => {
        let map = tt.map({
            key: "5HPMaBBUGeCYVi9qNLKmDqsQBD573tah",
            container: mapElement.current,
            center: [location.lng, location.lat],
            zoom: 10,
        });

        function success(pos) {
            let crd = pos.coords;
            setLocation({ lng: crd.longitude, lat: crd.latitude })
            map.setCenter([crd.longitude, crd.latitude])
            const el = document.createElement("div");
            el.className = "marker";
            new tt.Marker({
                element: el
            }).setLngLat([crd.longitude, crd.latitude]).addTo(map);
        }
        const handelModal = () => {
            changeInnerModal(<p className='error'>please enable location we need it in weather checking </p>);
            openModal();
        }

        function errorLocation(error) {
            if (error.code === 1) {
                handelModal();
            }
        }

        navigator.geolocation.getCurrentPosition(success, errorLocation);
    }, []);

    return (
        <div className='mapContainer'>
            <Modal />
            <div ref={mapElement} className="mapElement"></div>
        </div>
    )
}
