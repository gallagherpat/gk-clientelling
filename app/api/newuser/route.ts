import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: Request) {
    const req = await request.json();
    const data = await req;
    const createUser = await prisma.user.create({
        data: data
    })
    if(!createUser) return NextResponse.json({success: false})
    return NextResponse.json({success: true})
}