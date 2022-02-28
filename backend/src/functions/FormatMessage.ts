function extract_date(content: String){        
    const regex = /[0-9]/;

    if(regex.test( content.slice(0, 9)) && regex.test( content.slice(11, 15) ) && content[17] == '-' ){

        const Date = content.slice(0, 9);
        const Hour = content.substr(11, 5);

        return {"date": Date, "hour": Hour};
    }else{
        return {"date": null, "hour": null};
    }
}

function extract_name(content: String){
    if (content.indexOf('-') == 17 && content.indexOf(':') > -1) {

        const begin = (content.search(/-/) - (-2));
        const end =   content.indexOf(": ");            
        const TheName = content.substr(begin, (end - begin) );
        
        return TheName;
    }else{
        return null;
    }
}

function extract_message(content: String){
    if(content.indexOf('-') == 17 && content.indexOf(':') > -1) {

        const starting_point  = (content.indexOf(": ") + 2);
        const message_content = content.slice(starting_point, content.length);
        
        return message_content;
    }else{
        return content;
    }
}

function format_message(message: String){
    const full_date       = extract_date(message);
    const name            = extract_name(message);
    const message_content = extract_message(message);

    return { 
        "date": full_date.date, 
        "hour": full_date.hour, 
        "name": name, 
        "message": message_content 
    };
}

export default format_message;