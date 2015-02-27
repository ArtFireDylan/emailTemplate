var path = require('path')
var emailTemplates = require('swig-email-templates')
var fs = require('fs');

var events = require('./events').events;
var tips = require('./tips').tips;
var emails = require('./emails').emails;


var swigOptions = {
    root: path.join(__dirname, "src")
};

var writeEmail = function(emailName, html, text) {
    var emailPaths = path.join(__dirname, "emails")
    var name =  encodeURIComponent(emailName);
    var emailFilePath = path.join(emailPaths, name + ".html");
    
    
    fs.writeFile(emailFilePath, html, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Wrote: " + emailFilePath);
        }
    });
    
}

var buildEmail = function(email, sendFunction) {
    
    
    emailTemplates(swigOptions, function(err, render) {
        var achievements = [];
        var todo = [];
        for (var i = 0; i < events.length; i++) {
            if( i <  3) {
                achievements.push(events[i]);

            } else {

                todo.push(events[i]);

            }
        }
        
        
        var context = {
            subject: email.heading,
            properties: [{
                "property":"og:title",
                "content":"My First Campaign"
            }],
            tips: tips,
            headingText: email.heading,
            todo: todo,
            achievements: achievements,
            mainContent: email.content
        };
        
        render('index.html', context, function(err, html, text) {
            if(err) {
                console.error(err)
            } else {
                sendFunction(email.heading, html, text)
            }
        });
    });
    
}


for (var i = 0; i < emails.length; i++) {
    buildEmail(emails[i], writeEmail);
}
