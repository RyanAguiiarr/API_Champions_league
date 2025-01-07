import express, {json, Request, Response} from "express"
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-services"
import { noContent } from "../utils/http-helper"
import { statisticsModel } from "../models/statistics-model"

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
    const bodyValue = req.body
    const data = await createPlayerService(bodyValue)

    if(data){
        res.status(200).json(data.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
    
}

export const deletePlyer = async(req: Request, res:Response) => {
    const id = parseInt(req.params.id)
    const data = await deletePlayerService(id)
    res.status(200).json(data.body)
} 

export const updatePlayer = async(req: Request, res:Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    const data = await updatePlayerService(id, bodyValue)
    res.status(data.statusCode).json(data.body)
} 