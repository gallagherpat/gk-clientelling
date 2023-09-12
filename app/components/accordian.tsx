//@ts-nocheck
"use client"
import {useEffect, useState} from "react";
import React from "react";

export default function Accordian(props){
    const [orders, setOrders] = useState([]);
    const dummyReq = async function() {
        let endpoint = props.name.toLowerCase();
        if(endpoint == 'past purchases'){
            endpoint = 'past-purchases';
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
        setOrders(data.data);
    }

    const [isAccordianOpen, setAccordianOpen] = useState(false);
    const [isIndex, setIndex] = useState(0);
    function accordianHandler(id){
        setIndex(id);

        (isAccordianOpen) ? setAccordianOpen(!isAccordianOpen) : setAccordianOpen(!isAccordianOpen)

        //console.log(isIndex)

        return isAccordianOpen
    }

    useEffect(() => {
        dummyReq();
    }, [])
    let accordian = orders.map((order) => (
        <>
            <section onClick={() => {accordianHandler(order.orderID)}} key={order.orderID}>
                <div className="flex flex-row border-b-[1px] border-b-slate-500 my-4">
                    <div className="grow">Order ID: {order.orderID}</div>
                    <span className="flex-none">{order.status}</span>
                </div>
            </section>
            <OpenedAccordian id={order.orderID} index={isIndex} isAccordianOpen={isAccordianOpen} basket={order.basket}/>
        </>
    ))
    return(
    <div className="w-11/12 mx-auto">
        {accordian}
    </div>
    )
}

function OpenedAccordian(props) {
    const items = props.basket;
    const isOpen = props.isAccordianOpen
    const id = props.id;
    const isIndex = props.index
    let total: number = 0;
    //console.log(items)

    items.map((item) => total += item.price)


    return (
    <div className={isOpen && id == isIndex ? "block" : "hidden"} >
     {items.map((item, index) => (
        <div className="flex" key={index}>
            <div className="grow">{item.receiptText}</div>
            <span className="text-right">${item.price}</span>
        </div>
    ))}
    <div className="h-[1px] bg-slate-500 my-2 mx-4"></div>
    <div className="flex">
        <div className="grow">Total:</div>
        <span>${(Math.round((total * 1.07) * 100)/100)}</span>
    </div>
    <button className="w-full mt-4 py-3 bg-slate-600 rounded-lg">Fulfill</button>
    </div>
    )

}

