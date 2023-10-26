//@ts-nocheck
import Image from "next/image";
import Tag from "./tag";
//@ts-ignore
function Modal(props){
    const className = "bg-white rounded-md min-h-fit z-10 p-2 absolute inset-6 top-16 mix-blend-normal"
    const pageHandler = props.pageHandler;
    const item = props.item;

    let addItemButton = (
    <button className="bg-[#333] mb-1 text-sm h-12 w-32 rounded-full text-white" onClick={
      ()=>{
      let oAppFunctions = new comAppenablementFunctions.Connector;
      oAppFunctions.sendRegisterItem(item.itemID)
      pageHandler();
        
    }}>Add to Cart</button>
    )
    return (
    <div className={props.isModalOpen && props.index == props.modalKey ? className : "hidden"}>
        <button onClick={props.setModal}>X</button>
        <Image
            className="mx-auto"
            src={item.img}
            alt='Placeholder'
            width={200}
            height={200}
        />
        <h2 className="text-lg font-bold ml-2">{item.receiptText}</h2>
        <Tag tag={item.tag}/>
        <p className="text-sm ml-2">{item.longDescription} 
        <a className="underline" target="_blank" href={`https://www.lcbo.com/en/${item.url}`}>More Details...</a>
        </p>
        <div className="bg-[#333] h-[1px] mx-2 my-4 opacity-20"></div>
        <div className="w-11/12 mx-auto">
          {addItemButton}
            </div>
        </div>
    );
}

export default Modal;