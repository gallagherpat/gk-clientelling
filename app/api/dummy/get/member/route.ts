import { NextResponse } from "next/server";

export async function GET() {
    const JSON = {
    "data":[{
                "id": "400117",
                "firstName": 'Victoria',
                "lastName": 'Smith',
                "points": "300",
                'rewards': ['20% off'],
                "preferences": ['hello', 'world'],
            }]
        }
return NextResponse.json(JSON);
}