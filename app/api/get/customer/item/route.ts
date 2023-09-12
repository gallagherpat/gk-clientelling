import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
    const prisma = new PrismaClient
    const cookieStore = cookies();
    const req = await request.json();
    const res = await req;
    const getCustomer = await prisma.customer.findUnique({
          where: {
            name: res.customer
          },
          include: {
            items: true
          }
        })
    const customerData = await getCustomer
    console.log(customerData);
    const items = await customerData?.items;
    console.log(items);

    cookieStore.set({
        name: 'oData',
        value: JSON.stringify(customerData),
        path: '/'
    })

    console.log(res);
    return NextResponse.json(items);
}