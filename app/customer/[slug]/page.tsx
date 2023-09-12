//@ts-nocheck
"use client"
import Section from '@/app/components/section';
import Header from '@/app/layouts/header';
import CustomerCard from '@/app/layouts/cust-card';
import { Suspense, useEffect, useState } from 'react';

export default async function Page({params}: {params:{slug: string}}){
  const data = {
    "data":[{
                "id": "400117",
                "firstName": 'Victoria',
                "lastName": 'Smith',
                "points": "300",
                'rewards': ['20% off'],
                "preferences": ['Bourbon', 'White wine'],
            }]
        }
  //console.log(data.data);
  return (<main className="min-h-screen">
  <CustomerSection name={params.slug}/>
  <Header name={params.slug} memberName={data?.data[0].firstName + ' ' + data?.data[0].lastName}/>
  {/* <div>Test: {params.slug}</div> */}
  <div className="flex flex-col">
  <Suspense fallback={<div>Loading...</div>}>
    <CustomerCard member={data?.data[0]}/>
  </Suspense>
  <Section name="Orders"/>
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
    {isLoad ?  <div className="absolute z-50 bg-white h-screen w-full overflow-hidden"><div className="relative h-full pt-56 w-11/12 mx-auto"><img src={logoPath} alt="" srcset="" /></div></div> : <div className="hidden">Hide</div>}
  </>)
}


