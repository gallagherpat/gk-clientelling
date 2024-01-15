import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
        "data": [
            {
            "orderID": 3,
            "userID": 1,
            "qty": 2,
            "status": "Ready for pickup",
            "shipAddress": "Store 12",
            "basket": [
                {
                    "itemID": 300415613,
                    "price": 29.95,
                    "receiptText": "Fade Beanie team blue",
                    "registrationNumber": 300415613,
                    "shortDescription": "Malbec",
                    "longDescription": "Made in a completely natural way, with nothing more than fermented grapes, this malbec has a delicious purity.",
                    "img": "/img/21987.jpg",
                    "url": "virgen-natural-malbec-2019-21987",
                    "tag": "organic"
                    
                },
                {
                    "itemID": 300660325,
                    "price": 79.95,
                    "receiptText": "Iconic Jacket Women slash stripe black",
                    "registrationNumber": 300660325,
                    "shortDescription": "Vodka",
                    "longDescription": "The unique combination of traditional copper pot stills and modern distilling techniques create a classic vodka that has over 300 years of distilling heritage.",
                    "img": "/img/456095.jpg",
                    "url": "ketel-one-vodka-456095",
                    "tag": ""
                },
                {
                    "itemID": 300618505,
                    "price": 20.45,
                    "receiptText": "Airline Bag fairway/white",
                    "registrationNumber": 300618505,
                    "shortDescription": "IPA",
                    "longDescription": "Brewed with lots of fresh hops; bottled unfiltered and naturally carbonated. Pours a hazy amber with aromas of grapefruit, orange peel, pineapple and resinous hops.",
                    "img": "/img/667790.jpg",
                    "url": "boneshaker-ipa-667790",
                    "tag": "ontario"
                }
            ]
        },
        {
            "orderID": 2,
            "userID": 1,
            "qty": 2,
            "status": "Store 2623",
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
                }
            ]
        },
        {
            "orderID": 1,
            "userID": 1,
            "qty": 2,
            "status": "Store 2623",
            "shipAddress": "Store 12",
            "basket": [
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
        }]
        }
        
return NextResponse.json(JSON);
}