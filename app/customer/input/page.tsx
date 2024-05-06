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
      <h1 className="mb-3 text-xl font-bold">Add a new Customer</h1>
      <label htmlFor="name">Name:</label>
        <input className="pl-1 ml-3" type="text" name="name" placeholder="Customer Name"/>
        <br />
      <button type="submit" className="px-3 py-2 mt-3 bg-blue-500 rounded-lg">Submit</button>
      </form>
      <form className="mt-4 ml-4" action={deleteCustomer} method="post">
      <h1 className="mb-3 text-xl font-bold">Delete a Customer</h1>
      <label htmlFor="name">Name:</label>
        <input className="pl-1 ml-3" type="text" name="name" placeholder="Customer Name"/>
        <br />
      <button type="submit" className="px-3 py-2 mt-3 bg-blue-500 rounded-lg">Submit</button>
      </form>
    </main>
  )
}
