import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data":[{
                "itemID": 21987,
                "price": 17.95,
                "receiptText": "Virgen Natural Malbec 2019",
                "registrationNumber": 219870000,
                "shortDescription": "Malbec",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "url": '/img/21987.jpg'
            },
            {
                "itemID": 21987,
                "price": 17.95,
                "receiptText": "Virgen Natural Malbec 2019",
                "registrationNumber": 219870000,
                "shortDescription": "Malbec",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "url": '/img/21987.jpg'
            },
            {
                "itemID": 21987,
                "price": 17.95,
                "receiptText": "Virgen Natural Malbec 2019",
                "registrationNumber": 219870000,
                "shortDescription": "Malbec",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "url": '/img/21987.jpg'
            },
            {
                "itemID": 21987,
                "price": 17.95,
                "receiptText": "Virgen Natural Malbec 2019",
                "registrationNumber": 219870000,
                "shortDescription": "Malbec",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "url": '/img/21987.jpg'
            },
        
        ]
        }
return NextResponse.json(JSON);
}