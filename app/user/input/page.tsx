import Header from "@/app/layouts/header"
import UserForm from "@/app/components/userForm"

export default function Home() {

  //@ts-ignore
  return (
    <main className="min-h-screen">
      <Header/>
      <UserForm page={'input'}/>
    </main>
  )
}
