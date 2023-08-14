import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: Request) {
    const req = await request.json();
    console.log(req.hello);
    // const createUser = await prisma.user.create({
    //     data:{
    //      name: "Victoria Smith",
    //      email: "victoria@email.com",
    //      createdAt: new Date()
    //     }
    // })
    // if(!createUser) return NextResponse.json({success: false})
    return NextResponse.json({success: true})
}