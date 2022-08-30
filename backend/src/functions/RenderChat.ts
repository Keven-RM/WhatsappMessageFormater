import fs from 'fs'
import path from 'path'

//types
import ListContent from "../types/index"

//functions
import format_message from './FormatMessage';
import export_messages_list from './ExportList';
import sync from './SyncMidia';
import unzip_and_save from './Unzip';

const render_chat = async () => {
    // const render_chat = async (destination: string, name: string, originalname: string) => {
    //Unzip files
    const destination = '/home/keven/Documentos/codes/personal/WhatsappMessageFormater/backend/src/data/0612b678-b3b9-4c2c-a9e8-b2ad3bce133d'
    const name = 'm.zip'
    const originalname = 'm.zip'
    const fulldir = `${destination}/${originalname.slice(0, -4)}`
    const dir = path.resolve('src', 'data')
    const IsUnziped = unzip_and_save(destination, originalname);

    var file = await fs.promises.readdir(`${destination}/${originalname.slice(0, -4)}`)
    file = file.filter( ( elm ) => elm.match(/.*\.(txt?)/ig) )//Filtra somente as midias com do tipo .txt
    console.log(file[0])
    if(file[0]){
        try {
            const LinesData = await fs.promises.readFile(`${fulldir}/${file}`, 'utf-8');
            if (LinesData) {
                const chat_list: Array<ListContent> = [];
                const lines = LinesData.split(/\r?\n/); // Converte a linha em string
    
                //Renderiza as linhas
                lines.forEach((line: String) => {
                    chat_list.push(format_message(line))
                });
    
                const rendered_chat = export_messages_list(chat_list);
                const sync_midia = await sync(rendered_chat, fulldir);
                return { filename: originalname, chat: sync_midia }
            }
        } catch (error) {
            console.error(error);
        }
    }
}

render_chat()

export default render_chat;