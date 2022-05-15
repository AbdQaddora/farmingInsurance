import React, { useState } from 'react';
import './CalcInsuranceCost.css';
import { IoClose } from "react-icons/io5";

export default function CalcInsuranceCost({ showCalc, close }) {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const setValue = (e) => {
        if (e.target.value < 0) { return; }
        if (e.target.name === "Length") {
            setLength(e.target.value);
        } else {
            setWidth(e.target.value);
        }
    }

    return (
        <>
            <p><label htmlFor='Length'>Length in meters</label><input type="text" id="Length" name="Length" value={length} onChange={(e) => { setValue(e) }} /></p>
            <p><label htmlFor='width'>width in meters</label><input type="text" id="width" name="width" value={width} onChange={(e) => { setValue(e) }} /></p>
            <p>Cost = {length * width * 0.5 > 0 ? (length * width * 0.5) / 1000 : "0"} ETH</p>
        </>
    )
}
