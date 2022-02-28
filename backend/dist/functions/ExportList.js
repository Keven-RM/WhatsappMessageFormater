"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function export_messages_list(list) {
    const message_list = [];
    var last_message;
    for (let index = 0; index < list.length; index++) {
        if (list[index].name != null) {
            last_message = list[index];
            message_list.push(last_message);
        }
        else {
            message_list[message_list.length - 1].message = `${message_list[message_list.length - 1].message}\n${list[index].message}`;
        }
    }
    return message_list;
}
exports.default = export_messages_list;
