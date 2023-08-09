import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

interface test {
    success: boolean
}

// const prisma = new PrismaClient();
function handler(
    _req: NextApiRequest, 
    res: NextApiResponse<test>
    ){
        const user: test = {success: true}
        const noUser: test = {success: true}

    if(_req.method === 'POST'){
        res.status(200).json(user)
        console.log(_req.body);
    }else{
        res.status(400).json(noUser)
    }
    // // const createUser = await prisma.user.create({
    // //     data:{
    // //      name: "Victoria Smith",
    // //      email: "victoria@email.com",
    // //      createdAt: new Date()
    // //     }
    // // })
    // if(_req.body){
    //     res.status(200).json({sucess: true})
    // }else{
    //     res.status(400).json({success: false})
    // }
}

export default handler
