import { PrismaClient, Prisma } from "@prisma/client"
import Header from "@/app/layouts/header";

export default function Page(){
  interface item {
    itemID?: string,    
    price?: number,
    receiptText?: string,
    registrationNumber?: string,
    shortDescription?: string,
    longDescription?: string,
    url?: string,
    customer?: number
  }
  async function deleteItem(data: FormData) {
    //Work dammit
    "use server"
    const prisma = new PrismaClient();
    console.log(data.get('itemID')?.toString());
    try{
      const createItem = await prisma.items.delete({
        where: {
          itemID: data.get('itemID')?.toString()
        }
      })
      console.log('Item deleted', createItem);
    }catch(error){
      console.error('Error deleting item:', error);
    }finally{
      await prisma.$disconnect();
    }
    
  }
    return (<main className="min-h-screen">
      <Header/>
      <form className="ml-4" action={deleteItem} method="post">
      <h1 className="mb-3 font-bold text-xl">Add a new Item</h1>
      <label className="mr-28" htmlFor="itemID">Item ID:</label>
        <input className="ml-3 pl-1" type="number" name="itemID" placeholder="123456789"/>
        <br />
      <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
        </form>
    </main>)
    // return (<h1>Hello again</h1>)
}


