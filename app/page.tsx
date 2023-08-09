"use client"
import Section from "./components/section"
import Header from "./layouts/header"
import CustomerCard from "./layouts/cust-card"


const fetcher = (url:string) => fetch(url).then((res) => res.json())

export default function Home() {

  //@ts-ignore
  
  return (
    <main className="min-h-screen">
      <Header/>
      <div className="flex flex-col">
      <CustomerCard />
      <Section name="Orders"/>
      <Section name="Recommendations"/>
      <Section name="Past Purchases"/>
      <Section name="Wish List"/>
      {/* <button className="bg-" onClick={createUser}>Create user</button> */}


      </div>
    </main>
  )
}
