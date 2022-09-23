export interface ListContent {
    "date": string | null, 
    "hour": string | null, 
    "name": string | null, 
    "message": string,
    "type": string,
    "imgURL"?: string
}

export interface Img {
    id: number,
    name: string,
    url: string
}