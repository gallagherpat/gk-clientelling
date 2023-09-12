//@ts-nocheck
"use client"
import Section from "./components/section"
import Header from "./layouts/header"
import CustomerCard from "./layouts/cust-card"
import { Suspense, useEffect, useState } from 'react';

// async function getData() {
//   const myHeaders = new Headers;
//   myHeaders.append("Content-type", "application/json");

//   const req = await fetch(`./api/dummy/get/member`, {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow',
//     cache: 'no-store'
//   })
//   if(!req.ok) {
//     throw new Error('Failed to fetch')
//   }
//   return req.json()
// }


export default async function Home() {
  const data ={
    "data":[{
                "id": "400117",
                "firstName": 'Victoria',
                "lastName": 'Smith',
                "points": "300",
                'rewards': ['20% off'],
                "preferences": ['hello', 'world'],
            }]
        }
  
  return (
    <main className="min-h-screen">
      <script type="text/javascript" src="/libs/AppEnablementConnector.js"></script>
      <script type="text/javascript" src="/libs/api/Common.js"></script>
      <script type="text/javascript" src="/libs/api/Pos.js"></script>
      <script type="text/javascript" src="/js/test.js"></script>

      <Header/>
      <div className="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerCard member={data?.data[0]}/>
      </Suspense>
      <Section name="Orders"/>
      <Section name="Recommendations"/>
      <Section name="Past Purchases"/>
      <Section name="Wish List"/>
      <Button item={80001}/>
      <CustomerSection/>
      </div>
    </main>
  )
}


//@ts-ignore
function Button(props){
  let sItemID = props.item
  const buttons = (<>
  {/* <script type="text/javascript" src="/libs/AppEnablementConnector.js"></script>
  <script type="text/javascript" src="/libs/api/Pos.js"></script> */}
  <button 
  className="py-2 px-4 my-2 rounded-full bg-[#222] text-[#fff] font-bold active:bg-[#6b6b6b]"
   onClick={()=>{
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
    }}>
      Click Me
    </button>
  </>
  )
    return buttons
}


function CustomerSection() {
  const [oData, setData] = useState([])
  const [isLoad, setLoad] = useState(false)
  // if(localStorage.getItem('oData') !== undefined){
  //   setLoad(true)
  // }
  let data;
  useEffect(() =>{
    if(typeof window !== "undefined"){
      data = localStorage.getItem('oData') || ""
      setData(JSON.parse(localStorage.getItem('oData')))
    }
    setLoad(true)
  }, [isLoad])

  
  console.log(oData[0]?.firstName);
  const customerSection = (<>
  <script type="text/javascript" src="/js/test.js"></script>
  {/* <script>var secret = "hello"</script> */}
  </>
  )

  return (<>
  {customerSection}
  <div>Test</div>
  </>)
}