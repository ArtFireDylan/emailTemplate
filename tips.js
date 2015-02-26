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

addTip("test")
// export it
exports.tips = tips;