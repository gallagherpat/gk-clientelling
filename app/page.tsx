//@ts-nocheck
"use client"
import Section from "./components/section"
import Header from "./layouts/header"
import CustomerCard from "./layouts/cust-card"
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
  const [oData, setData] = useState([]);
  const [isLoad, setLoad] = useState(true);
  useEffect(() =>{
    if(typeof window !== "undefined" && isLoad){
      window.addEventListener('storage', () =>{
        console.log("event happend")
        setLoad(false)
        setData(JSON.parse(localStorage.getItem('oData')))
      })
    }
  }, [])
  
  if(!isLoad) {
    console.log("remove listener");
    console.log(oData)
  }
  

  const data ={
    "data":[{
                "id": oData[0]?.key.customerID,
                "firstName": oData[0]?.firstName,
                "lastName": oData[0]?.lastName,
                "DOB" : `${oData[0]?.birthMonthNumber.toString()}/${oData[0]?.birthDayNumber.toString()}/${oData[0]?.birthYearNumber.toString()}`,
                "status": 'Gold',
                "points": "300", 
                'rewards': ['20% off'],
                "preferences": ['4 Regular', 'Extra Small'],
            }]
        }
  
  return (
    <main className="min-h-screen">
      <CustomerSection/>
      <Header memberName={data?.data[0]?.firstName + " " + data?.data[0]?.lastName}/>
      <div className="flex flex-col">
        {/* <img src="https://live.emea.gkc4r.com/dsg/services/rest/media/v1/files/Standard_Items/booklet/bookletFashion/300660325.jpg"/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerCard member={data?.data[0]}/>
      </Suspense>
      <Section name="Orders"/>
      <Section name="Recommendations"/>
      <Section name="Past Purchases"/>
      <Section name="Wish List"/>
      {/* <button onClick={()=>{
          let oAppFunctions = new comAppenablementFunctions.Connector;
          oAppFunctions.sendGetItemImage(300618505)
      }}>Get item image test</button> */}
      </div>
    </main>
  )
}

function CustomerSection() {
  const [oData, setData] = useState([])
  const [isLoad, setLoad] = useState(true)
  const [isCount, setCount] = useState(0)
  useEffect(() =>{
    if(typeof window !== "undefined"){
      window.addEventListener('storage', () =>{
        console.log("event happend")
        setLoad(false)
        setData(JSON.parse(localStorage.getItem('oData')))
      })
    }
  }, [])

  if(oData !== null){
    console.log(oData[0]?.firstName);
  }
  const customerSection = (<>
  <script type="text/javascript" src="/js/app.js" defer/>
  </>
  )

  return (<>
  {customerSection}
    {isLoad ?  <div onClick={() => {
      setCount((prev) => prev += 1)
      console.log(isCount);
      if(isCount > 5){
        console.log("Dev open");
        setLoad(false)
      }
    }} className="absolute z-50 w-full h-screen bg-white"><div className="relative w-11/12 h-full pt-56 mx-auto"><img src="/GK_Software_logo.png" alt="Logo"/></div></div> : <div className="hidden">Hide</div>}
  </>)
}