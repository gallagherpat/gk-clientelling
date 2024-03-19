"use client"
import Image from "next/image";
//@ts-ignore
export default function Button(props) {
    "use client"
    let item = props.item;
    return (
    <button className="p-2 bg-white border-2 rounded-md h-72 mix-blend-normal" onClick={() => {console.log("click")}}>
        <Image 
            priority
            className="w-auto" 
            src={item.img} 
            alt={`Product Image ${item.itemID}`} 
            height={100} 
            width={100}/>
        <h3 className="mb-2 text-sm font-bold text-left">{item.receiptText.length > 20 ? item.receiptText.substring(0, 20) + "...": item.receiptText}</h3>
        <p className="text-xs text-left font-200 indent-1">{item.shortDescription}</p>
        <div className="h-[1px] bg-gray-300 mx-2 my-2"></div>
        <p className="text-sm text-left ml-14">12</p>
    </button>
    )
}
