//@ts-nocheck
"use client"
import { useEffect, useState } from "react";
import Modal from "./modal";
import Backdrop from "./backDrop";

function Rec(props){
    const pageHandler = props.pageHandler;
    const [items, updateItems] = useState([]);
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const dummyReq = async function() {
        let endpoint = props.name.toLowerCase();
        if(endpoint == 'wish list'){
            endpoint = 'wish-list';
        }
        const myHeaders = new Headers;
        myHeaders.append("Content-type", "application/json");
        const req = await fetch(`/api/dummy/get/${endpoint}`, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        });  
        const res = await req.json();
        const data = await res;
        updateItems(data.data);  
    }

    useEffect(() => {
        dummyReq();
    }, [])

    const [isModalOpen, setModalOpen] = useState(false);
    const [isIndex, setIndex] = useState(0);
    function modalHandler(id){
        setIndex(id);
        (isModalOpen) ? setModalOpen(!isModalOpen) : setModalOpen(!isModalOpen)
        return isModalOpen
    }

    let cards = items.map((item, index) => (
    <>
    <div key={index}>
        <button className="border-2 rounded-md h-72 p-2 mix-blend-normal bg-white" onClick={() => {modalHandler(item.itemID)}}>
            <img height={96} width={96} className="mx-auto" src={item.img} alt="" />
        <h3 className="text-sm text-left font-bold mb-2">{item.receiptText}</h3>
        <p className="text-xs text-left font-200 indent-1">{item.shortDescription}</p>
        <div className="h-[1px] bg-gray-300 mx-2 my-2"></div>
        <p className="text-sm text-left ml-14">{USDollar.format(item.price)}</p>
        </button>
        <Modal isModalOpen={isModalOpen} modalKey={item.itemID} index={isIndex} item={item} setModal={modalHandler} pageHandler={pageHandler}/>
    </div>
    </>
    ))
    return (
        <div id="gridHeader" className="grid grid-cols-2 gap-2 mt-2 mx-4">
            {cards}
            {isModalOpen && <Backdrop setModal={modalHandler}/>}
        </div>
    );
}

export default Rec;