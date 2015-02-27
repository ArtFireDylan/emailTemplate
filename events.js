var events = [];


var addEvent = function(name, todoText, doneText, id ) {


    todoText = todoText || '';
    doneText = doneText || '';
    
    id = id || 0;
    
    if(id == 0) {
        id = events.length + 1;
        
    }
    
    events.push(  {
        'id' : id,
        'todoText': todoText,
        'doneText': doneText,
        'name' : name
    });
}

addEvent("Event XXXX", "You need to do XXXX", "Congrats on doing Event XXXX")
addEvent("Event YYYY", "You need to do YYYY", "Congrats on doing Event YYYY")
// export it
exports.events = events;