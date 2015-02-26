var events = [];


var addTip = function(name, todoText, doneText, id ) {


    todoText = todoText || '';
    doneText = doneText || '';
    
    id = id || 0;
    
    if(id == 0) {
        id = events.length + 1;
        
    }
    
    events.push(  {
        'id' : id,
        'todoText': todoText,
        'relatedEvent': relatedEventIds,
        'text' : text
    });
}

addTip("Event Name", "You need to do XXXX", "Congrats on doing Event")
// export it
exports.events = events;