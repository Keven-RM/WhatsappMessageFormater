import fs from 'fs'
import path from 'path'

//functions
import format_message from './FormatMessage';
import AddLineBreak from './AddLineBreak';
import InsertImagesInsideChat  from './InsertImages';

//types
import { ListContent } from "../types/index"

const render_chat = async (folder: string, filename: string) => {
    try {
        const LinesData = await fs.promises.readFile(path.resolve('src','data',filename), 'utf-8');
        if(LinesData){
            const chat_list: Array<ListContent> = [];
            const lines = LinesData.split(/\r?\n/); // Converte a linha em string
            
            //Renderiza as linhas
            lines.forEach( (line: string) => {
                let message = format_message(line)
                chat_list.push(message)
            })
                        
            //Converte linhas mensagem com linhas quebradas em uma unica mensagem
            var rendered_chat = AddLineBreak(chat_list); 
            // rendered_chat = InsertImagesInsideChat(rendered_chat, 'DIRETORIOTESTE')
            
            return { filename: filename.slice(33), chat: rendered_chat }
        }
    } catch (error) {
        console.error(error);
    }
}

export default render_chat;