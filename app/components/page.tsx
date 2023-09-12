"use client"
import { useState } from "react";
import Rec from "./rec";
import Accordian from "./accordian";

//@ts-ignore
function Page(props){
    const [isAnimated, setAnimation] = useState(true);
    let pageType = props.name;
    let componentType;
    // console.log(isAnimated);
    function pageHandler(){
        setAnimation(false);
        // console.log(isAnimated);
        setTimeout(props.setPageIsOpen, 275)
    }
    //console.log(pageType);
    
    switch(pageType) {
        case 'Orders':
        componentType = <Accordian name={props.name}/>
        break;
        case 'Recommendations':
        componentType = <Rec name={props.name}/>
        break;
        case 'Past Purchases':
        componentType = <Accordian name={props.name}/>
        break;
        case 'Wish List':
        componentType = <Rec name={props.name}/>
        break;
        default:
            console.error("Bad switch");
    }

    return (<div className={isAnimated ? "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white animate-slide" : "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white animate-reverseSlide"}>
        <header className="drop-shadow-lg py-4 bg-white">
            <h1 className="flex text-xl ml-4">
                <button id="backBtn" onClick={pageHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                </button>
                <p id="page-name" className="ml-2">{props.name}</p>
            </h1>
        </header>
        {componentType}
    </div>)

}

export default Page;