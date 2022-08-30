import fs from 'fs'

const sync = async (chat: any, path: any) => {
    const midialist = await fs.readdirSync(path);
    var messages = chat;

    for (let i = 1; i < midialist.length; i++) {
        for (let j = 0; j < messages.length; j++) {
            if(
                messages[j].type == 'midia' && 
                messages[j].message == '<Arquivo de mídia oculto>'
            ){
                messages[j].message = midialist[i]
                break;
            }
        }
    }

    return messages;
}

export default sync;