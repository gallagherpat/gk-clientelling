function Rec(){
    const items =  [
        {
            "itemID": 535322441,
            "price": 35.00,
            "receiptText": "Nova Shine Shopper Bag",
            "registrationNumber": 5353224410000,
            "shortDescription": "Take everything you need to the gym or into the city with this shopper bag.",
            "longDescription": "I enjoy all of the different exciting Jack Daniel's in the world and want to try them all",
            "url":"virgen-natural-malbec-2019-21987"
        },
        {
            "itemID": 535322451,
            "price": 75.00,
            "receiptText": "Puma Street Silicone Watch",
            "registrationNumber": 5353224510000,
            "shortDescription": "PUMA Puma Street Three-Hand Black Silicone Watch.",
            "longDescription": "I enjoy all of the different exciting Red wine in the world and want to try them all",
            "url":"benaiga-natural-wine-carignan-24757"
        },
        {
            "itemID": 535322431,
            "price": 30.00,
            "receiptText": "ProCat Duffel Bag",
            "registrationNumber": 5353224310000,
            "shortDescription": "Take everything you need to the gym or into the city with this duffel bag.",
            "longDescription": "I enjoy all of the different exciting not vodkas in the world and want to try them all",
            "url": "famille-perrin-nature-c-tes-du-rh-ne-2019-948059"
        },
        {
            "itemID": 535322413,
            "price": 24.00,
            "receiptText": "Training Mesh Running Cap",
            "registrationNumber": 53532241300000,
            "shortDescription": "Light weight, and breathable running cap.",
            "longDescription": "I enjoy all of the different exciting gins in the world and want to try them all",
            "url": "abouriou-nature-vin-de-france-2018-case-936848"
        }
    ]
    let cards =  items.map((item) => <button key={item.itemID} className="border-2 rounded-md min-h-fit p-2 mix-blend-normal bg-white">
    <h3 className="text-sm text-left font-bold">{item.receiptText}</h3>
    <p className="text-xs text-left font-thin indent-1">afterpay</p>
    <p className="text-xs text-left ml-1">{item.shortDescription}</p>
    </button>)
    return (
        <div id="gridHeader" className="grid grid-cols-2 gap-2 mt-2 mx-4">
            {cards}
        </div>
    );
}

export default Rec;