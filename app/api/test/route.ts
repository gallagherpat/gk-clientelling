import { NextResponse } from "next/server";

export async function POST(request: Request) {
    //Hello force deploy
    const req = await request.json();
    //console.log(req.hello);
    return NextResponse.json({hello: "test"})
}