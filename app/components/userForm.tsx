import { PrismaClient } from "@prisma/client"

//@ts-ignore
function UserForm(props){
    const page = props.page;
    async function newUser(data: FormData) {
        'use server'
        const prisma = new PrismaClient;
        const name = data.get('name')!;
        const email = data.get('email')!;
 
    const createUser = await prisma.user.create({
        data:{
         name: name?.toString(),
         email: email?.toString(),
         createdAt: new Date()
        }
    });
    }
    async function deleteUser(data: FormData) {
        'use server'
        const prisma = new PrismaClient;
        const email: string = data.get('email')?.toString()!;
        
    const removeUser = await prisma.user.delete({
        where: {
            email: email
        }
    });
    }
        if(page === 'input'){
            return(     
                <form action={newUser} className="mt-4 ml-4" method="post">
                <label htmlFor="name">Name:</label>
                <input className="ml-3 pl-1" type="text" name="name" placeholder="full name"/>
                <br />
                <label htmlFor="email">Email:</label>
                <input className="ml-4 pl-1 mt-3" type="text" name="email" placeholder="@"/>
                <br />
                <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
              </form>)
        }else if(page === 'delete'){
            return(     
                <form action={deleteUser} className="mt-4 ml-4" method="post">
                <label htmlFor="email">Email:</label>
                <input className="ml-4 pl-1 mt-3" type="text" name="email" placeholder="@"/>
                <br />
                <button type="submit" className="bg-blue-500 py-2 px-3 mt-3 rounded-lg">Submit</button>
              </form>)
        }
        else {
            return (
                <div>Error</div>
            )
        }
    }



export default UserForm