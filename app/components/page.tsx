"use client"
import { useState } from "react";
import Rec from "./rec";

//@ts-ignore
function Page(props){
    const [isAnimated, setAnimation] = useState(true);
    console.log(isAnimated);
    function pageHandler(){
        setAnimation(false);
        if(isAnimated === false){
            console.log("Help")
        }
        console.log(isAnimated);
        setTimeout(props.setPageIsOpen, 275)
    }
    // function animator(){
    //     className = "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white reverse:animate-slide"
    // }
    return (<div className={isAnimated ? "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white animate-slide" : "absolute top-0 left-0 h-screen w-full rounded-xl bg-gradient-to-b from-[#D6DBDC] to-white animate-reverseSlide"}>
        <header className="drop-shadow-lg py-4 bg-white">
            <h1 className="flex text-xl ml-4">
                <button id="backBtn" onClick={pageHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                </button>
                <p id="page-name" className="ml-2">{props.name}</p>
            </h1>
        </header>
        <Rec/>
    </div>)

}

export default Page;