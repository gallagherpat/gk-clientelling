//@ts-nocheck
"use client"
import { useEffect, useState } from "react";

export default function MostRecentOrder() {
    const [isMostRecent, setMostRecent] = useState([])
    const [isLoad, setLoad] = useState(false)
    const dummyReq = async function(){
        const myHeaders = new Headers;
        myHeaders.append("Content-type", "application/json");
        const req = await fetch(`/api/dummy/get/orders`)
        const res = await req.json();
        const data = await res;

        setMostRecent(data.data);
        setLoad(true)
        console.log(data.data[0]);
        console.log(isMostRecent[0])
    }
    useEffect(() => {
        dummyReq()
    }, [])

    return (<>
    {isLoad ? 
    <div className="flex w-10/12 pt-1 mx-auto">
        <span className="grow">Order ID: {isMostRecent[0]?.orderID}</span>
        <span>{isMostRecent[0]?.status}</span>
    </div> 
            : <div>Loading..</div>}
    </>)
}