import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data":[
            {
                "itemID": 936848,
                "price": 24.00,
                "receiptText": "Abouriou Nature Vin De France 2018",
                "registrationNumber": 9368480000,
                "shortDescription": "Red - Medium Bodied",
                "longDescription": "Very rare red Loire grape! Organic and natural. Deep garnet in the glass; lifted tones of small red berries; rustic aromas of red fruit, baking spices are enhanced by grippy tannins.",
                "img": "/img/936848.jpg",
                "url": "abouriou-nature-vin-de-france-2018-case-936848",
                "tag": ""
            },
            {
                "itemID": 557470,
                "price": 53.95,
                "receiptText": "Empress 1908 Gin",
                "registrationNumber": 5574700000,
                "shortDescription": "Gin",
                "longDescription": "Empress 1908 Gin's name refers to the landmark Victoria, B.C hotel. The gin is made with eight organic botanicals and a non-GMO corn spirit as the base. ",
                "img": "/img/557470.jpg",
                "url": "empress-1908-gin-557470",
                "tag": ""
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
        }
return NextResponse.json(JSON);
}