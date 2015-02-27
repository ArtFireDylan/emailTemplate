var tips = [];

var addTip = function(text, relatedEventIds, id ) {
    relatedEventIds = relatedEventIds || [];
    id = id || 0;
    
    if(id == 0) {
        id = tips.length + 1;
        
    }
    
    tips.push(  {
        'id' : id,
        'relatedEvent': relatedEventIds,
        'text' : text
    });
}

addTip("test 1")
addTip("test 2")
addTip("test 3")
// export it
exports.tips = tips;