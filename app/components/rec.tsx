//@ts-nocheck
"use client"
import { useEffect, useState } from "react";
import Modal from "./modal";
import Backdrop from "./backDrop";

function Rec(props){
    const pageHandler = props.pageHandler;
    const [items, updateItems] = useState([]);
    const prodReq = async function () {
        const myHeaders = new Headers;
        myHeaders.append("Content-type", "application/json")
        const req = await fetch('/api/get/customer/item', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({customer: 'test'}),
            redirect: "follow"
        });
        const res = await req.json();
        const data = await res;
        updateItems(data);
    }
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
    function modalHandler(){
        (isModalOpen) ? setModalOpen(!isModalOpen) : setModalOpen(!isModalOpen)
        return isModalOpen
    }

    let cards = items.map((item) => <div key={item.itemID}>
        <button className="border-2 rounded-md min-h-fit p-2 mix-blend-normal bg-white" onClick={modalHandler}>
            <img height={96} width={96} className="mx-auto" src={item.url} alt="" />
        <h3 className="text-sm text-left font-bold mb-2">{item.receiptText}</h3>
        <p className="text-xs text-left font-200 indent-1">{item.shortDescription}</p>
        <div className="h-[1px] bg-gray-300 mx-2 my-2"></div>
        <p className="text-sm text-left ml-14">${item.price}</p>
        </button>
        {isModalOpen && <Modal item={item} setModal={modalHandler} pageHandler={pageHandler}/>}
    </div>

    )
    return (
        <div id="gridHeader" className="grid grid-cols-2 gap-2 mt-2 mx-4">
            {cards}
            {isModalOpen && <Backdrop setModal={modalHandler}/>}
        </div>
    );
}

export default Rec;