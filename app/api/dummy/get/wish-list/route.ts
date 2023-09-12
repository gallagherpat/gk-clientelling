import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data":[{
                "itemID": 64321,
                "price": 35.99,
                "receiptText": "wish list",
                "registrationNumber": 543210000,
                "url": '/GK_Software_logo.png'
            }]
        }
return NextResponse.json(JSON);
}