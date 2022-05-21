import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import { ethers } from "ethers";
import './Subscribe.css';
import thank from '../../images/thank_you.svg';
import errorImg from '../../images/error_no_wallet.svg';
import etherImg from '../../images/ether.svg';
import CONTRACT_API from '../../contractApi'
const CONTRACT_ADDRESS = '0x2089ae2c0e845fd5299364fd72083097a411b6e4';
export const SubscribeModal = () => {
    const { length, width, location, changeInnerModal, openModal } = useGlobalContext();
    const [cost, setCost] = useState((length * width * 0.5) / 1000);
    useEffect(() => {
        setCost((length * width * 0.5) / 1000)
    }, [length, width])

    // to get a connection with the metamask  account
    const getAccount = async (provider) => {
        const accountAddress = await window.ethereum.request({ method: "eth_requestAccounts" });
        return accountAddress[0];
    }

    //Call subscribe function from smart contract and send cost value 
    const sendSubscribeTransaction = async (provider) => {
        const signer = provider.getSigner();
        const options = { value: ethers.utils.parseEther(`${cost}`) };
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_API, signer);
        const tx = await contract.subscribe(width * length, JSON.stringify(location), options);
        changeInnerModal(
            <div className='modal-with-img'>
                <img src={thank} />
                <br />
                <h2>now your land is safe from drought 🎉</h2>
                <h1>Thank you for subscribing in our system ❤</h1>
                <br />
                <hr />
                <p>transaction id = {`${tx.hash}`}</p>
            </div>
        )
        openModal();
    }

    // to check is There enough ethers in account
    const isThereEnoughEther = async (accountAddress, provider) => {
        const balance = await provider.getBalance(accountAddress);
        const balanceInEther = hexToDecimal(balance._hex) / 10 ** 18;
        if (balanceInEther > cost) {
            return true;
        } else {
            return false;
        }
    }

    // convert hex number to decimal number
    const hexToDecimal = (hexString) => {
        const decimal = parseInt(hexString, 16);
        return decimal;
    }
    const handelSubscribe = async () => {
        // if there is metamask or not
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accountAddress = await getAccount(provider);
            const enoughEthers = await isThereEnoughEther(accountAddress, provider);
            if (enoughEthers) {
                sendSubscribeTransaction(provider);
            } else {
                openModal();
                changeInnerModal(
                    <div className='modal-with-img'>
                        <img src={etherImg} />
                        <br />
                        <h1>sorry you dont have enough Ethers 😢</h1>
                    </div>
                )
                openModal();
            }
        } else {
            // show error there is no wallet
            changeInnerModal(
                <div className='modal-with-img'>
                    <img src={errorImg} />
                    <br />
                    <h2>You don't have any crypto wallet</h2>
                </div>
            )
            openModal();
        }
    }

    return <div className='subscribe'>
        <h3>Are you sure ?</h3>
        <p>this will cost you {`${cost} ETH `}</p>
        <button className='confirm-btn' onClick={() => handelSubscribe()}>Confirm</button>
    </div>
}

