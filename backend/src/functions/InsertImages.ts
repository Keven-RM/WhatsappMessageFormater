import { ListContent } from "../types";
import OrganizeImageList from "./OrganizeImagesList";

export default function InsertImagesInsideChat(chat: Array<ListContent>, folderName: string){
    const imgList = OrganizeImageList(folderName)

    chat.forEach( (msg) => {
        var index = 0;

        if(msg.type == 'midia'){
            msg.imgURL = imgList[index].url
            index++
        }
    })

    return chat
}