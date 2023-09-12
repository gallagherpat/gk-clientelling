import Header from "@/app/layouts/header"
import { PrismaClient } from "@prisma/client"




export default function Home() {
    async function newCustomer(data: FormData) {
        'use server'
        const prisma = new PrismaClient;
        //@ts-ignore
        const inputName: string = data.get('name')?.toString();

        //console.log(data.get('name'));
        const createCustomer = await prisma.customer.create({
        data:{
         name: inputName,
        }
    });
    }
    async function deleteCustomer(data: FormData) {
        'use server'
        const prisma = new PrismaClient;
        //@ts-ignore
        const inputName: string = data.get('name')?.toString();
      
        // console.log(data.get('name'));
        const createCustomer = await prisma.customer.deleteMany({
           where: {name: {
            contains: inputName
           }} 
        });
    }

  //@ts-ignore
  return (
    <main className="min-h-screen">
      <Header/>
      <form className="mt-4 ml-4" action={newCustomer} method="post">
      <h1 className="mb-3 font-bold text-xl">Add a new Customer</h1>
      <label htmlFor="name">Name:</label>
        <input className="ml-3 pl-1" type="text" name="name" placeholder="Customer Name"/>
        <br />
      <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
      </form>
      <form className="mt-4 ml-4" action={deleteCustomer} method="post">
      <h1 className="mb-3 font-bold text-xl">Delete a Customer</h1>
      <label htmlFor="name">Name:</label>
        <input className="ml-3 pl-1" type="text" name="name" placeholder="Customer Name"/>
        <br />
      <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
      </form>
    </main>
  )
}
