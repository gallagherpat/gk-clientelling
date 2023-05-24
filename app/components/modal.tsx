import Image from "next/image";
//@ts-ignore
function Modal(props){
    return (<div className="bg-white rounded-md min-h-fit z-10 p-2 absolute inset-6 top-32 mix-blend-normal">
        <button onClick={props.setModal}>X</button>
        <Image
            className="my-8 mx-auto"
            src='/placeholder.png'
            alt='Placeholder'
            width={226}
            height={226}
        />
        <p  className="text-sm font-thin ml-2">afterpay</p>
        <p  className="text-sm ml-2">This is a tasty red wine</p>
        <div className="bg-[#333] h-[1px] mx-2 my-3 opacity-20"></div>
        <button  className="bg-[#333] ml-2 mb-4 text-sm py-1 px-2 rounded-full text-white">Add to Cart</button>
    </div>
    );
}

export default Modal;