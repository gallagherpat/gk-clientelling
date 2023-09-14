"use client"
import { useEffect, useState } from "react";

export default function MostRecentOrder() {
    const [isMostRecent, setMostRecent] = useState([])
    const dummyReq = async function(){
        const myHeaders = new Headers;
        myHeaders.append("Content-type", "application/json");
        const req = await fetch(`/api/dummy/get/orders`)

    }

}