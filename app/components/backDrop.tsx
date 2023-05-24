//@ts-ignore
function Backdrop(props){
    return <div className="fixed bg-[#000000bf] w-full h-[100vh] top-0 left-0" onClick={props.setModal}/>
}

export default Backdrop;