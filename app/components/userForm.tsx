import { PrismaClient } from "@prisma/client"

function UserForm(){
    async function newUser(data: FormData) {
        'use server'
        const prisma = new PrismaClient;

        console.log(data.get('name'));
        console.log(data.get('email'));

    const createUser = await prisma.user.create({
        data:{
         name: JSON.stringify(data.get('name')),
         email: JSON.stringify(data.get('email')),
         createdAt: new Date()
        }
    });

    }

    return(     
    <form className="mt-4 ml-4" action={newUser} method="post">
    <label htmlFor="name">Name:</label>
    <input className="ml-3 pl-1" type="text" name="name" placeholder="full name"/>
    <br />
    <label htmlFor="email">Email:</label>
    <input className="ml-4 pl-1 mt-3" type="text" name="email" placeholder="@"/>
    <br />
    <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
  </form>)
}

export default UserForm