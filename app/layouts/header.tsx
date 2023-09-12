"use client"
import Image from "next/image"
import * as React from 'react';


//@ts-ignore
export default function Header(props){
let memberName = props.memberName;
// console.log(props)
let logoPath = "/" + props.name + ".png"
if(!props.name){
logoPath = "/GK_Software_logo.png";
} 
return(
<header className="flex mb-[2px] bg-white drop-shadow-md p-2 h-[48px]">
    <h1 className="flex grow capitalize ms-4 my-auto">{memberName}</h1>
        <Image
            className="mr-4"
            src={logoPath}
            alt="Picture of next SVG"
            width={0}
            height={0}
            sizes="100vw"
            style={{width: 'auto', height: '32px'}}
        />
</header>
)}
