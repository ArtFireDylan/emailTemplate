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

addEvent("Event AAAA", "You need to do AAAA", "Congrats on doing Event AAAA");
addEvent("Event BBBB", "You need to do BBBB", "Congrats on doing Event BBBB");
addEvent("Event CCCC", "You need to do CCCC", "Congrats on doing Event CCCC");

addEvent("Event UUUU", "You need to do UUUU", "Congrats on doing Event UUUU");
addEvent("Event XXXX", "You need to do XXXX", "Congrats on doing Event XXXX");
addEvent("Event YYYY", "You need to do YYYY", "Congrats on doing Event YYYY");
addEvent("Event ZZZZ", "You need to do ZZZZ", "Congrats on doing Event ZZZZ");
// export it
exports.events = events;