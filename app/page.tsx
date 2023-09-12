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
      <CustomerSection/>
      <Header/>
      <div className="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerCard member={data?.data[0]}/>
      </Suspense>
      <Section name="Orders"/>
      <Section name="Recommendations"/>
      <Section name="Past Purchases"/>
      <Section name="Wish List"/>
      </div>
    </main>
  )
}

function CustomerSection() {
  const [oData, setData] = useState([])
  const [isLoad, setLoad] = useState(true)
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
  <script type="text/javascript" src="/js/test.js" defer/>
  </>
  )

  return (<>
  {customerSection}
    {isLoad ?  <div className="hidden absolute z-50 bg-white h-screen w-full overflow-hidden"><div className="relative h-full pt-56 w-11/12 mx-auto"><img src="/GK_Software_logo.png" alt="" srcset="" /></div></div> : <div className="hidden">Hide</div>}
  </>)
}