//@ts-nocheck
"use client"
import Section from '@/app/components/section';
import Header from '@/app/layouts/header';
import CustomerCard from '@/app/layouts/cust-card';
import { Suspense, useEffect, useState } from 'react';
import MostRecentOrder from '@/app/components/mostRecentOrder';

export default function Page({params}: {params:{slug: string}}){
  const data = {
    "data":[{
                "id": "400117",
                "firstName": 'Victoria',
                "lastName": 'Smith',
                "DOB" : "12/03/1987",
                "points": "Gold",
                'rewards': ['$5 off $50'],
                "preferences": ['Euro Vodka', 'Spanish Wine'],
            }]
        }
  //console.log(data.data);
  return (<main className="min-h-screen">
  <CustomerSection name={params.slug}/>
  <Header name={params.slug} memberName={data?.data[0].firstName + ' ' + data?.data[0].lastName} />
  {/* <div>Test: {params.slug}</div> */}
  <div className="flex flex-col">
  <Suspense fallback={<div>Loading...</div>}>
    <CustomerCard member={data?.data[0]}/>
  </Suspense>
  <Section name="Orders"/>
  <MostRecentOrder/>
  <Section name="Recommendations"/>
  <Section name="Past Purchases"/>
  <Section name="Wish List"/>
  </div>
</main>)
}

function CustomerSection(props) {
  let logoPath = "/" + props.name + ".png"
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
  <script type="text/javascript" src="/js/test.js" defer/>
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
    }}  className="absolute z-50 bg-white h-screen w-full"><div className="relative h-full pt-56 w-11/12 mx-auto"><img src={logoPath} alt="Logo"/></div></div> : <div className="hidden">Hide</div>}
  </>)
}


