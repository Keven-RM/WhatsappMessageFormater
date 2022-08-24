import fs from 'fs'
import path from 'path'

//functions
import format_message from './FormatMessage';
import export_messages_list from './ExportList';

//types
import ListContent from "../types/index"

const render_chat = async (filename: String) => {
    try {
        const LinesData = await fs.promises.readFile(path.resolve('src','data',filename), 'utf-8');
        if(LinesData){
            const chat_list: Array<ListContent> = [];
            const lines = LinesData.split(/\r?\n/); // Converte a linha em string
            
            //Renderiza as linhas
            lines.forEach( (line: String) => {
                let message = format_message(line)
                chat_list.push(message)
            }) 
            
            const rendered_chat = export_messages_list(chat_list);
            return { filename: filename.slice(33), chat: rendered_chat }
        }
    } catch (error) {
        console.error(error);
    }
}

export default render_chat;