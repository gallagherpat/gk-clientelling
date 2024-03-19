import { cache } from 'react';
import Button from './button';

const getBasketData = cache(async () =>{
    const myHeaders = new Headers;
    myHeaders.append("Content-type", "application/json");
    const req = await fetch(`http://localhost:3000/api/dummy/get/recommendations`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });  
    const res = await req.json();
    const data = await res;
    return await data.data
});

async function ServerRec() {
    const basket = await getBasketData();
    //@ts-ignore
    const cards = basket.map((item, index) => {
        return (
        <div key={index}>
                <Button item={item}/>
        </div>        
        )
    })

    return cards
}


export default ServerRec