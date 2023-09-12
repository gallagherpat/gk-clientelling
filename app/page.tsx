"use client"
import Section from "./components/section"
import Header from "./layouts/header"
import CustomerCard from "./layouts/cust-card"
import { Suspense } from 'react';


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
      <Header/>
      <div className="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerCard member={data?.data[0]}/>
      </Suspense>
      <Section name="Orders"/>
      <Section name="Recommendations"/>
      <Section name="Past Purchases"/>
      <Section name="Wish List"/>
      {/* <button className="bg-" onClick={createUser}>Create user</button> */}
      </div>
    </main>
  )
}
