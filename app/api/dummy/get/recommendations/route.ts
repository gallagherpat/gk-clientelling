import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
        "data":[
            {
                "itemID": 8000001,
                "price": 89.95,
                "receiptText": "Mount Thunder Polo",
                "registrationNumber": 219870000,
                "shortDescription": "",
                "longDescription": "A modern landmark in the distillery district - the copper columns of the still at the Spirit of York Distillery are revealed by a striking transparent glass tower.",
                "img": "/img/8000001.png",
                "url": "spirit-of-york-vodka-541755",
                "tag": "ontario"
                
            },
            {
                "itemID": 8000002,
                "price": 49.95,
                "receiptText": "Cheers 2.0 Belt",
                "registrationNumber": 219870000,
                "shortDescription": "",
                "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                "img": "/img/8000002.png",
                "url": "virgen-natural-malbec-2019-21987",
                "tag": "organic"
                
            },
            {
                "itemID": 8000003,
                "price": 34.95,
                "receiptText": "Surf Warning Snapback Hat",
                "registrationNumber": 247570000,
                "shortDescription": "",
                "longDescription": "This juicy, bright wine was fermented with wild yeast in stainless steel to preserve the fine fruit tones.",
                "img": "/img/8000003.png",
                "url": "benaiga-natural-wine-carignan-24757",
                "tag": ""
            }
            ]
        }
return NextResponse.json(JSON);
}