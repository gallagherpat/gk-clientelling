"use client"
import Section from '@/app/components/section';
import Header from '@/app/layouts/header';
import CustomerCard from '@/app/layouts/cust-card';

export default function Page({params}: {params:{slug: string}}){
    async function newUser() {
      const req = await fetch('/api/newuser', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          hello: 'test',
        })
      });
      const res = await req.json();
      const data = await res;
      console.log(data);
    }

    return (
        <main className="min-h-screen">
          <Header name={params.slug}/>
          <div>Test: {params.slug}</div>
          <div className="flex flex-col">
          <CustomerCard />
          <Section name="Orders"/>
          <Section name="Recommendations"/>
          <Section name="Past Purchases"/>
          <Section name="Wish List"/>
          <button className='bg-blue-400 px-3 py-4 m-3' onClick={newUser}>New user</button>
          </div>
        </main>
      )
}
