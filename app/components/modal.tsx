//@ts-nocheck
import Image from "next/image";
//@ts-ignore
function Modal(props){
    const item = props.item;
    const sItemID = item.itemID;
    let addItemButton = (<button className="bg-[#333] ml-2 mb-4 text-sm py-1 px-2 rounded-full text-white" onClick={()=>{
      let oAppEnablementPosInstance = new comGkSoftwareGkrAppEnablementApi.Pos();
      console.log("click")
      const sendRegisterItem = function(item: number){
        console.log(item);
        let registerLineItemRequest = JSON.stringify({
            "itemID": item
        });
        oAppEnablementPosInstance.registerLineItem(registerDataOk, registerDataFailed, registerLineItemRequest);
        }
        function registerDataOk() {
          console.log("Succesfully registered", "success");
        }
        function registerDataFailed() {
          console.error("Data registration failed");
        }
        sendRegisterItem(sItemID);
    }}>Add to Cart</button>)
    return (<div className="bg-white rounded-md min-h-fit z-10 p-2 absolute inset-6 top-32 mix-blend-normal">
        <button onClick={props.setModal}>X</button>
        <Image
            className="my-8 mx-auto"
            src={item.url}
            alt='Placeholder'
            width={226}
            height={226}
        />
        <h2 className="text-lg font-bold ml-2">{item.receiptText}</h2>
        <p  className="text-sm font-thin ml-2">afterpay</p>
        <p  className="text-sm ml-2">This is a tasty red wine</p>
        <div className="bg-[#333] h-[1px] mx-2 my-3 opacity-20"></div>
        {addItemButton}
    </div>
    );
}

export default Modal;