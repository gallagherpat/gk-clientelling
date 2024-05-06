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
  async function newItem(data: FormData) {
    //Work dammit
    "use server"
    const prisma = new PrismaClient();
    let oPrice: string | undefined | null = data.get('price')?.toString();
    const item: item = await {
      itemID: data.get('itemID')?.toString(),
      price: parseFloat(oPrice ?? ''),
      receiptText: data.get('receiptText')?.toString(),
      registrationNumber: data.get('registrationNumber')?.toString(),
      shortDescription: data.get('shortDescription')?.toString(),
      longDescription: data.get('longDescription')?.toString(),
      url: data.get('url')?.toString(),
    }
    // console.log(item);
    // console.log(typeof item.price);
    try{
      const createItem = await prisma.customer.update({
        where: {
          id: 4
        },
        data: {
          items: {
            create:[
              item
            ] as Prisma.ItemsCreateWithoutCustomerInput[]
          }
        }
      })
      // console.log('Item created', createItem);
    }catch(error){
      console.error('Error creating item:', error);
    }finally{
      await prisma.$disconnect();
    }
    
  //   const createItem = await prisma.customer.create({
  //     data: {
  //       name: "Sheetz",
  //       items:{
  //         create: item
  //     }}
  // })
  }
    return (<main className="min-h-screen">
      <Header/>
      <form className="ml-4" action={newItem} method="post">
      <h1 className="mb-3 text-xl font-bold">Add a new Item</h1>
      <label className="mr-28" htmlFor="itemID">Item ID:</label>
        <input className="pl-1 ml-3" type="number" name="itemID" placeholder="123456789"/>
        <br />
      <label className="mr-32" htmlFor="price">Price:</label>
        <input className="pl-1 mt-3 ml-3" type="float" name="price" placeholder="1.99"/>
        <br />
      <label className="mr-20" htmlFor="receiptText">Receipt Text:</label>
        <input className="pl-1 mt-3 ml-1" type="text" name="receiptText" placeholder="coke"/>
        <br />
      <label className="mr-3" htmlFor="registrationNumber">Registration Number:</label>
        <input className="pl-1 mt-3 ml-3" type="number" name="registrationNumber" placeholder="123456789"/>
        <br />
      <label className="mr-8" htmlFor="shortDescription">Short Description:</label>
        <input className="pl-1 mt-3 ml-3" type="text" name="shortDescription" placeholder="Coke is a delicious beverage"/>
        <br />
      <label className="mr-6" htmlFor="longDescription">Long Descriptiond:</label>
        <input className="pl-1 mt-3 ml-3" type="text" name="longDescription" placeholder="Coke is a delicious beverage"/>
        <br />
      <label className="mr-16" htmlFor="url">Url to image:</label>
        <input className="pl-1 mt-3 ml-5" type="text" name="url" placeholder="https://"/>
        <br />
      <button type="submit" className="px-3 py-2 mt-3 bg-blue-500 rounded-lg">Submit</button>
        </form>
    </main>)
    // return (<h1>Hello again</h1>)
}


