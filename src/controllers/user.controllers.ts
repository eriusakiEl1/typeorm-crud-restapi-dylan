import { Request, Response } from "express"
import { User } from "../enitities/user"
import { error } from "console"
import { ifError } from "assert"

export const createUser = async (req: Request, res: Response) => {
    try {
        const {firstname, lastname} = req.body

        const user = new User()
        user.firstname = firstname;
        user.lastname = lastname

        await user.save()

        return res.json(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }    
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.find()
        return res.json(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params
    
    const user = await User.findOneBy({id: parseInt(req.params.id)});
    
    if (!user) {
        return res.status(404).json({message: 'User Does Not Exists'})
    }

    await User.update({id: parseInt(id)}, req.body)

    return res.sendStatus(204)
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await User.delete({id: parseInt(id)})

        if (result.affected === 0) {
            return res.status(404).json({message: 'User Not Found'})
        }

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const user = await User.findOneBy({id: parseInt(id)})
        return res.json(user)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}