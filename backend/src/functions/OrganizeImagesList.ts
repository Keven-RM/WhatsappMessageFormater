import { readdirSync } from "fs";
import path from 'path'
import { Img } from "../types";

export default function OrganizeImageList(directoryName: string){
    const filesPath = path.resolve('src','data', directoryName)
    const imgList: Array<Img> = []
    var index = 0

    readdirSync(filesPath).forEach(file => {
        imgList.push({
            id: index,
            name: file,
            url: `/${directoryName}/${file}`
        })
        
        index++
    });

    return imgList
}