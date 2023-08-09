// "use client"
// import { useRef } from "react"
// interface test {
//   success: boolean
// }
import { PrismaClient } from "@prisma/client"


export default function Page(){
  const prisma = new PrismaClient();
  //   const oData = useRef();

  //   function submitHandler(event) {
  //   event.preventDefault();
  //   if(oData === undefined){
  //     return <p>Error</p>
  //   }
  //   const testData = oData.current.value;
  //   console.log(testData);
  //   const jsonData = {test: testData}
  //   console.log(jsonData);
  //   fetch('/api/newuser', {
  //     method: "POST",
  //     body: JSON.stringify(jsonData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  // }
  async function test() {
    'use server'
    console.log("hello world")
  }
    return (<form action={test}>
        <input type="text" name="world" defaultValue="hello"/>
        <button type="submit" className="bg-slate-800 mx-auto p-2 rounded-md text-white mt-4">Click me</button>
      </form>)
    // return (<h1>Hello again</h1>)
}


