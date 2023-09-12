//@ts-nocheck
import { PrismaClient } from '@prisma/client';

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const customerData = await prisma.customer.findUnique({
//        where:{id: 4}
//   })
//   const customers = await customerData.json();
//   console.log(customers);
//   return customers.map((customer) => ({
//     test: customerData.name,
//   }))
// }

export default async function Test(){
    const prisma = new PrismaClient();

  const customerData = await prisma.customer.findUnique({
       where:{
        id: 4
    },
  })
// console.log(customerData);
    return(
        <main>
            <div>Hello</div>
        </main>
    )
}