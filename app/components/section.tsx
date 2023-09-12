"use client"
import { useState } from "react";
import Page from "./page";

//@ts-ignore
function Section(props){
    const [pageIsOpen, setPageIsOpen] = useState(false)
    function pageHandler(){
        (pageIsOpen) ? setPageIsOpen(!pageIsOpen) : setPageIsOpen(!pageIsOpen);
        //console.log(pageIsOpen)
        return pageIsOpen
    }
    const name = props.name;

    return (<div className="row-auto mx-4 mt-4 text-xl">
    <div className="flex py-2 ps-2 justify-between bg-[#91a9d2] rounded-full">
        <span className="ml-2">{props.name}</span>   
        <button className="mr-2" onClick={pageHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
                <path d="m480 722 146-146-146-146-42 42 74 74H330v60h182l-74 74 42 42Zm0 254q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/>
                </svg>
        </button>
    </div>
    {pageIsOpen && <Page name={name} setPageIsOpen={pageHandler}/>}
    {/* {pageIsOpen && <Modal pageHandler={pageHandler}/>}
    {pageIsOpen && <Backdrop pageHandler={pageHandler}/>} */}
    </div>
    )
}

export default Section

// export default class Sections extends Component{
//     constructor(props:String){
//         super(props);
//         this.state = {
//             visible: false
//         }
//     }

//     names = ["Orders", "Recommendations", "Past Purchases", "Wish List"]
//     render(){
//         return(
//             this.names.map((name, i) => <div className="row-auto mx-4 mt-4 text-xl" key={i}>
//             <div className="flex py-2 ps-2 justify-between bg-[#91a9d2] rounded-full">
//                 <span className="ml-2">{name}</span>   
//                 <button onClick={() =>{
//                     //@ts-ignore
//                     this.setState({visible: !this.state.visible})
//                     console.log(this.state)
//                 }}
//                 className="mr-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
//                         <path d="m480 722 146-146-146-146-42 42 74 74H330v60h182l-74 74 42 42Zm0 254q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/>
//                         </svg>
//                 </button>
//             </div>
//         </div>
//     ))
// }}
