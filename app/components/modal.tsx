//@ts-nocheck
import Image from "next/image";
//@ts-ignore
function Modal(props){
    const pageHandler = props.pageHandler;
    const item = props.item;
    const sItemID = item.itemID;
    let addItemButton = (<button className="bg-[#333] mb-1 text-sm h-12 w-32 rounded-full text-white" onClick={()=>{
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
        pageHandler();
    }}>Add to Cart</button>)
    return (<div className="bg-white rounded-md min-h-fit z-10 p-2 absolute inset-6 top-16 mix-blend-normal">
        <button onClick={props.setModal}>X</button>
        <Image
            className="mx-auto"
            src={item.url}
            alt='Placeholder'
            width={200}
            height={200}
        />
        <h2 className="text-lg font-bold ml-2">{item.receiptText}</h2>
        <div className="flex text-sm font-300 py-3 ml-2">
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9642 2.26454C10.9488 -1.18545 3.56601 1.98575 0.275013 11.6785C0.0974511 12.2015 0.377454 12.7694 0.900417 12.9469C1.42338 13.1245 1.99127 12.8445 2.16883 12.3215L2.28436 11.9892C5.17578 3.86575 11.1426 1.2122 20.5925 3.94014L20.664 3.96103L20.6593 4.26072C20.4247 13.7811 15.1663 17.8729 4.4303 16.786C6.49399 13.3139 10.1141 10.6459 15.3384 8.7627C15.8579 8.57541 16.1273 8.0024 15.94 7.48284C15.7527 6.96328 15.1797 6.69392 14.6601 6.88121C6.14636 9.95025 1.3747 15.1411 0.507087 22.3883C0.441438 22.9367 0.83276 23.4344 1.38113 23.5001C1.9295 23.5657 2.42726 23.1744 2.49291 22.626C2.66021 21.2285 2.99057 19.9176 3.48565 18.6926L4.16113 18.7682L4.93852 18.8393C16.7341 19.7939 22.8019 14.4954 22.6652 3.20672C22.66 2.77407 22.3771 2.39386 21.9642 2.26454Z" fill="#222222"/>
          </svg>
          <span className="ml-2">Organic</span>
          </div>
        <p className="text-sm ml-2">{item.longDescription} <a className="underline" target="_blank" href="https://www.lcbo.com/en/virgen-natural-malbec-2019-21987">More Details...</a></p>
        <div className="bg-[#333] h-[1px] mx-2 my-4 opacity-20"></div>
        <div className="w-11/12 mx-auto">
          {addItemButton}

              </div>
        </div>
    );
}

export default Modal;