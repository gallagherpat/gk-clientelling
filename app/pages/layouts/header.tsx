import Image from "next/image"
import * as React from 'react';



export default function Header(){

return(
<header className="flex mb-[2px] bg-white drop-shadow-md p-2">
    <h1 className="flex grow capitalize ms-4 my-auto">GK-Software</h1>
        <Image
            className="mr-4"
            src="/../../favicon.ico"
            alt="Picture of next SVG"
            width={48}
            height={48}
        />
</header>
)}
