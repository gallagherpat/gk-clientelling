import Section from "./components/section"
import Header from "./pages/layouts/header"
import CustomerCard from "./pages/layouts/cust-card"



export default function Home() {

  return (
    <main className="min-h-screen">
      <Header/>
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
