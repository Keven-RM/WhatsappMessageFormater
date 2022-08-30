import ListContent from "../types/index"

function export_messages_list(list: Array<ListContent>){
    const message_list: Array<ListContent> = [];
    var last_message: ListContent;

    for (let index = 0; index < list.length; index++) {
        if(list[index].name != null){
            last_message = list[index];
            message_list.push(last_message);
        }else{
            message_list[message_list.length -1].message = `${message_list[message_list.length -1].message}\n${list[index].message}`;
        }
    }

    return message_list;
}

export default export_messages_list;