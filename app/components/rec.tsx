//@ts-nocheck
"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import Backdrop from "./backDrop";


function Rec(props){
    const pageHandler = props.pageHandler;
    const [items, updateItems] = useState([]);
    const [gkItems, updateGKItems] = useState([]);
    let data;

    let urls = ["https://golfteamproducts.com/cdn/shop/products/GS4962-01-Front_3qtr.jpg?v=1702059447&width=823", "https://assets.peterglenn.com/jpg/1000x1000/75786_SSB_LG.jpg", "https://straighttohellapparel.com/wp-content/uploads/2019/07/del_bomber_blk_grn_web_7.jpg","https://2.bp.blogspot.com/-3p91GNxbtcM/UAgSHudZlvI/AAAAAAAAAvw/GKVddovVTbc/s1600/Image+10+Pic+1.jpg"]

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
    };

    useEffect(() => {
        getGKData();
        dummyReq();
    }, [])

    const getGKData = async function () {
        let oAppFunctions = new comAppenablementFunctions.Connector;
        data = oAppFunctions.sendGetItemDataByIDList([300415613, 300660325, 300678851, 300618505])
        console.log(data)
        updateGKItems(data);
        // updateGKItems([1])
        console.log("GK Data")
        console.log(gkItems);
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const [isIndex, setIndex] = useState(0);
    function modalHandler(id){
        setIndex(id);
        console.log(id)
        (isModalOpen) ? setModalOpen(!isModalOpen) : setModalOpen(!isModalOpen)
        return isModalOpen
    }
    //sellingPriceList[0].priceAmount
    let cards = gkItems?.map((item, index) => (
        
    <div key={index}>
    {/* <div>Hello {gkItems?.assortmentID}</div> */}
        <button className="p-2 bg-white border-2 rounded-md h-72 mix-blend-normal" 
        onClick={() => {
            //modalHandler(item?.posIdentityList[1].key.posItemId)
            const oAppFunctions = new comAppenablementFunctions.Connector;
            oAppFunctions.sendRegisterItem(item?.posIdentityList[0].key.posItemId);
        }}>
            <Image 
                className="w-auto" 
                // src={item.img} 
                // src="https://assets.peterglenn.com/jpg/1000x1000/75786_SSB_LG.jpg"
                src={urls[index]}
                alt={`Product Image ${index}`} 
                height={100} 
                width={100}/>
            <h3 className="mb-2 text-sm font-bold text-left">{item?.description.length > 20 ? item?.description.substring(0, 20) + "...": item?.description}</h3>
            {/* <p className="text-xs text-left font-200 indent-1">{item.shortDescription}</p> */}
            <p className="text-xs text-left font-200 indent-1">{item?.itemCharacteristicList[0].characteristicValueName}</p>
            <div className="h-[1px] bg-gray-300 mx-2 my-2"></div>
            <p className="text-sm text-left ml-14">{USDollar.format(item?.sellingPriceList[0].priceAmount)}</p>
            {/* {USDollar.format(item.price)} */}
        </button>
        {/* <div>{item?.posIdentityList[1].key.posItemId}</div> */}
        <Modal isModalOpen={isModalOpen} modalKey={item?.posIdentityList[1].key.posItemId} index={isIndex} item={item} gkItem={gkItems} setModal={modalHandler} pageHandler={pageHandler} url={urls[index]}/>
    </div>
    ))
    
    return (
        <div id="gridHeader" className="grid grid-cols-2 gap-2 mx-4 mt-2">
            {cards}
            {isModalOpen && <Backdrop setModal={modalHandler}/>}
        </div>
    );
}

export default Rec;