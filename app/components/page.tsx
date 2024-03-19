"use client"
import { useState } from "react";
import Rec from "./rec";
import Accordian from "./accordian";

//@ts-ignore
function Page(props){
    const [isAnimated, setAnimation] = useState(true);
    let pageType = props.name;
    let componentType;
    let className = "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white";
    if(pageType === "Wish List"){
        pageType = "Favorites"
    }
    function pageHandler(){
        setAnimation(false);
        setTimeout(props.setPageIsOpen, 275)
    }
    
    switch(pageType) {
        case 'Orders':
        componentType = <Accordian name={props.name} pageHandler={pageHandler}/>
        break;
        case 'Recommendations':
        componentType = <Rec name={props.name} pageHandler={pageHandler}/>
        break;
        case 'Past Purchases':
        componentType = <Accordian name={props.name} pageHandler={pageHandler}/>
        break;
        case 'Favorites':
        componentType = <Rec name={props.name} pageHandler={pageHandler}/>
        break;
        default:
            console.error("Bad switch");
    }

    return (<div className={isAnimated ? className + " animate-slide" : className + " animate-reverseSlide"}>
        <header className="py-4 bg-white drop-shadow-lg">
            <h1 className="flex ml-4 text-xl">
                <button id="backBtn" onClick={pageHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                </button>
                <p id="page-name" className="ml-2">{pageType}</p>
            </h1>
        </header>
        {componentType}
    </div>)
}

export default Page;