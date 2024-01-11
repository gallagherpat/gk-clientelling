//@ts-nocheck
import Image from "next/image";
import Tag from "./tag";
import { Prosto_One } from "next/font/google";
//@ts-ignore
function Modal(props){
    const className = "absolute z-10 p-2 bg-white rounded-md min-h-fit inset-6 top-6 mix-blend-normal"
    const pageHandler = props.pageHandler;
    const item = props.item;
    const gkItem = props.gkItem;
    return (
    <div className={props.isModalOpen && props.index == props.modalKey ? className : "hidden"}>
        <button onClick={props.setModal}>X</button>
        <Image
            className="w-auto"
            src="https://assets.peterglenn.com/jpg/1000x1000/75786_SSB_LG.jpg"
            alt='Placeholder'
            width={200}
            height={200}
        />
        {/* <h2 className="ml-2 text-lg font-bold">{item.receiptText}</h2> */}
        <h2 className="ml-2 text-lg font-bold">{gkItem.description}</h2>
        {/* <Tag tag={item.tag}/> */}
        <p className="ml-2 text-sm">{item.longDescription} 
        {/* <a className="underline" target="_blank" href={`https://www.lcbo.com/en/${item.url}`}>More Details...</a> */}
        </p>
        <div className="bg-[#333] h-[1px] mx-2 my-4 opacity-20"></div>
        <div className="w-11/12 mx-auto">
            <button className="bg-[#333] mb-1 text-sm h-12 w-32 rounded-full text-white" onClick={()=>{
                  const oAppFunctions = new comAppenablementFunctions.Connector;
                //oAppFunctions.sendRegisterItem(item.itemID);
                oAppFunctions.sendRegisterItem(gkItem.key.itemID);
                //key.itemID
                  pageHandler();
              }}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Modal;