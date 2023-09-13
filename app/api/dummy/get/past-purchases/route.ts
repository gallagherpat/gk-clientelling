import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data": [
        {
        "orderID": 37989,
        "userID": 1,
        "qty": 2,
        "status": "9/10/2023",
        "shipAddress": "Store 12",
        "basket": [
            {
                "itemID": 21987,
                "price": 17.95,
                "receiptText": "Virgen Natural Malbec 2019",
                "registrationNumber": 219870000,
                "shortDescription": "Malbec",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "img": "/img/21987.jpg",
                "url": "virgen-natural-malbec-2019-21987",
                "tag": "organic"
                
            },
            {
                "itemID": 24528,
                "price": 36.95,
                "receiptText": "Hounds Black Vodka",
                "registrationNumber": 245280000,
                "shortDescription": "Vodka",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "img": "/img/24528.jpg",
                "url": "hounds-black-vodka-24528",
                "tag": "ontario"
            },
        ]
    },
    {
        "orderID": 34123,
        "userID": 1,
        "qty": 1,
        "status": "8/24/2023",
        "shipAddress": "Store 12",
        "basket": [
            {
                "itemID": 24757,
                "price": 15.25,
                "receiptText": "Benaiga Natural Wine Carignan 2021",
                "registrationNumber": 247570000,
                "shortDescription": "Carignan",
                "longDescription": "This juicy, bright wine was fermented with wild yeast in stainless steel to preserve the fine fruit tones.",
                "img": "/img/24757.jpg",
                "url": "benaiga-natural-wine-carignan-24757",
                "tag": ""
            }
        ]
    }
    ]
    }
return NextResponse.json(JSON);
}