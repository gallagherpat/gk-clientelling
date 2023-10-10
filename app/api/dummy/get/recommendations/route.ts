import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data":[
        {
            "itemID": 541755,
            "price": 44.95,
            "receiptText": "Spirit of York Vodka",
            "registrationNumber": 219870000,
            "shortDescription": "Vodka",
            "longDescription": "A modern landmark in the distillery district - the copper columns of the still at the Spirit of York Distillery are revealed by a striking transparent glass tower.",
            "img": "/img/541755.jpg",
            "url": "spirit-of-york-vodka-541755",
            "tag": "ontario"
            
        },
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
            "itemID": 24757,
            "price": 15.25,
            "receiptText": "Benaiga Natural Wine Carignan 2021",
            "registrationNumber": 247570000,
            "shortDescription": "Carignan",
            "longDescription": "This juicy, bright wine was fermented with wild yeast in stainless steel to preserve the fine fruit tones.",
            "img": "/img/24757.jpg",
            "url": "benaiga-natural-wine-carignan-24757",
            "tag": ""
        },
        {
            "itemID": 948059,
            "price": 16.75,
            "receiptText": "Famille Perrin Nature Côtes du Rhône 2020",
            "registrationNumber": 9480590000,
            "shortDescription": "Grenache Blend",
            "longDescription": "The renowned Perrin family of Château de Beaucastel fame are flag-bearers for the quality and value to be found in the Southern Rhône. ",
            "img": "/img/948059.jpg",
            "url": "famille-perrin-nature-c-tes-du-rh-ne-2019-948059",
            "tag": "organic"
        }
        ]
        }
return NextResponse.json(JSON);
}