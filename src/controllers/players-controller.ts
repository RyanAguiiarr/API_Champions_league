import express, {json, Request, Response} from "express"
import { getPlayerByIdService, getPlayerService } from "../services/players-services"

export const getPlayer = async(req: Request, res:Response)=>{
    const data = await getPlayerService()
    res.status(200).json(data.body)
}

export const getPlayerById = async(req: Request, res:Response) => {
    const id = parseInt(req.params.id)
    const data = await getPlayerByIdService(id)
    res.status(200).json(data.body)
} 

export const postPlayer = async(req: Request, res:Response)=>{
    
}