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

        return isAccordianOpen
    }

    useEffect(() => {
        dummyReq();
    }, [])
    let accordian = orders.map((order) => (
        <>
            <section onClick={() => {accordianHandler(order.orderID)}} key={order.orderID}>
                <div className="flex flex-row border-b-[1px] border-b-slate-500 my-4 text-md">
                    <div className="grow">{props.name == 'Past Purchases' ? "Receipt #:" : "Order ID:"} {order.orderID}</div>
                    <span className="flex-none pt-1 text-sm">{order.status}</span>
                </div>
            </section>
            <OpenedAccordian order={order} index={isIndex} isAccordianOpen={isAccordianOpen} name={props.name} pageHandler={props.pageHandler}/>
        </>
    ))
    return(
    <div className="w-11/12 mx-auto">
        {accordian}
    </div>
    )
}

function OpenedAccordian(props) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    //Order and basket data
    const order = props.order;
    const basket = order.basket;
    
    const pageHandler = props.pageHandler;
    const name = props.name;
    const className = "w-full mt-4 py-3 bg-slate-600 rounded-lg text-white"
    let total: number = 0;
    basket.map((item) => total += item.price)

    let totalDiv = (
        <div className="flex">
        <div className="grow">Subtotal:</div>
        <span>{USDollar.format(Math.round((total) * 100)/100)}</span>
    </div>
    )
    {name == 'Past Purchases' ? "Receipt #:" : "Order ID:"}
    if(name == 'Past Purchases'){
        totalDiv = (
            <div className="flex">
            <div className="grow">Total:</div>
            <span>{USDollar.format(Math.round((total * 1.14) * 100)/100)}</span>
        </div>
        )
    }
    return (
    <div className={props.isAccordianOpen && order.orderID == props.index ? "block text-sm" : "hidden"} >
     {basket.map((item, index) => (
        <div className="flex my-1" key={index}>
            <div className="grow"><span>1 </span>{item.receiptText}</div>
            <span className="text-right">{USDollar.format(item.price)}</span>
        </div>
    ))}
    <div className="h-[1px] bg-slate-500 my-2 mx-4"></div>
        {totalDiv}
    <button onClick={() => {
        const sendRegisterItem = function(item: number){
          let registerLineItemRequest = JSON.stringify({
              "itemID": item
          });
          oAppEnablementPosInstance.registerLineItem(registerDataOk, registerDataFailed, registerLineItemRequest);
          }
          function registerDataOk() {
            console.log("Succesfully registered", "success");
          }
          function registerDataFailed() {
            console.error("Data registration failed");
          }
          for(let i = 0; i < basket.length; i++){
            console.log("Click")
            console.log(basket[i])
            sendRegisterItem(basket[i].itemID);
          }
        pageHandler();
    }} className={name == "Past Purchases" || order.status != "Ready for pickup"  ? "hidden": className}>Fulfill</button>
    </div>
    )

}

