var emails = [];

var addEmail = function(heading, eventIds, tipIds, content,  id ) {
    eventIds = eventIds || [];
    tipIds = tipIds || [];
    id = id || 0;
    
    if(id == 0) {
        id = emails.length + 1;
    }
    
    emails.push(  {
        'id' : id,
        'heading' : heading,
        'eventIds' : eventIds,
        'tipIds': tipIds,
        'content' : content
    });
}

addEmail(
    "HEADING/INTRO",
    [2],
    [1,3],
    "some test Content")






// export it
exports.emails = emails;