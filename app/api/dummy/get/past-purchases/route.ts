import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data": [
        {
        "orderID": 1,
        "userID": 1,
        "qty": 2,
        "status": "Ready for pickup",
        "shipAddress": "Store 12",
        "basket": [
            {
                "itemID": 535322411,
                "price": 35.99,
                "receiptText": "Whiskey",
                "registrationNumber": 543210000
            },
            {
                "itemID": 98765,
                "price": 22.99,
                "receiptText": "Vodka",
                "registrationNumber": 987650000
            }
        ]
    },
    {
        "orderID": 2,
        "userID": 1,
        "qty": 2,
        "status": "Ready for pickup",
        "shipAddress": "Store 12",
        "basket": [
            {
                "itemID": 64321,
                "price": 35.99,
                "receiptText": "Whiskey",
                "registrationNumber": 543210000
            },
            {
                "itemID": 88765,
                "price": 22.99,
                "receiptText": "Vodka",
                "registrationNumber": 987650000
            }
        ]
    },
    {
        "orderID": 3,
        "userID": 1,
        "qty": 2,
        "status": "Ready for pickup",
        "shipAddress": "Store 12",
        "basket": [
            {
                "itemID": 54321,
                "price": 35.99,
                "receiptText": "Whiskey",
                "registrationNumber": 543210000
            }
        ]
    }]
    }
return NextResponse.json(JSON);
}