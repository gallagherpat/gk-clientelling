import Section from '@/app/components/section';
import Header from '@/app/layouts/header';
import CustomerCard from '@/app/layouts/cust-card';

export default function Page({params}: {params:{slug: string}}){
    

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
          </div>
        </main>
      )
}
