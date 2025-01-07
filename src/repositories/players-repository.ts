import { playerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"

const database: playerModel[] = [
    {
        id: 1,
        name: "Messi",
        club: "inter-miame",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 93,
            pace: 85,
            shooting: 94,
            passing: 91,
            dribbling: 95,
            defending: 38,
            physical: 65,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 87,
            shooting: 93,
            passing: 82,
            dribbling: 85,
            defending: 34,
            physical: 78,
        },
    },
    {
        id: 3,
        name: "Neymar Jr.",
        club: "Al-Hilal",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 88,
            shooting: 84,
            passing: 86,
            dribbling: 94,
            defending: 36,
            physical: 61,
        },
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 97,
            shooting: 88,
            passing: 80,
            dribbling: 92,
            defending: 39,
            physical: 76,
        },
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 74,
            shooting: 86,
            passing: 93,
            dribbling: 87,
            defending: 64,
            physical: 77,
        },
    },
    {
        id: 6,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 78,
            shooting: 93,
            passing: 79,
            dribbling: 85,
            defending: 43,
            physical: 82,
        },
    },
]

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: playerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id)

    if(index !== -1){
        database.splice(index, 1)
        return true
    }
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<playerModel> => {
    const playerIndex = database.findIndex(player => player.id === id)

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}