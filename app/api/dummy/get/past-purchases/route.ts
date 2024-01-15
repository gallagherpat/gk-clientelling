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
                "itemID": 300678851,
                "price": 599.95,
                "receiptText": "Limited Jacket deepest black XXL",
                "registrationNumber": 300678851,
                "shortDescription": "Grenache Blend",
                "longDescription": "The renowned Perrin family of Château de Beaucastel fame are flag-bearers for the quality and value to be found in the Southern Rhône. ",
                "img": "/img/948059.jpg",
                "url": "famille-perrin-nature-c-tes-du-rh-ne-2019-948059",
                "tag": "organic"
            },
            {
                "itemID": 300618505,
                "price": 49.95,
                "receiptText": "Airline Bag fairway/white",
                "registrationNumber": 300618505,
                "shortDescription": "Carignan",
                "longDescription": "This juicy, bright wine was fermented with wild yeast in stainless steel to preserve the fine fruit tones.",
                "img": "/img/24757.jpg",
                "url": "benaiga-natural-wine-carignan-24757",
                "tag": ""
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
                "itemID": 300660325,
                "price": 79.95,
                "receiptText": "Iconic Jacket Women slash stripe black",
                "registrationNumber": 300660325,
                "shortDescription": "Lager",
                "longDescription": "Moosehead's flagship lager pours golden yellow with light hop and grain aromas, along with citrus, cereal and cut grass notes on the palate. ",
                "img": "/img/422345.jpg",
                "url": "moosehead-lager-422345",
                "tag": ""
            }
        ]
    }
    ]
    }
return NextResponse.json(JSON);
}