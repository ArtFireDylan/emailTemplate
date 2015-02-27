var path = require('path')
var emailTemplates = require('swig-email-templates')
var fs = require('fs');

var tips = require('./tips');

console.log(tips.tips);

var options = {
    root: path.join(__dirname, "src")
    // any other swig options allowed here
};
emailTemplates(options, function(err, render) {
    var context = {
        subject: 'test subject',
        properties: [{
                "property":"og:title",
                "content":"My First Campaign"
                }],
        tips: tips.tips,
        headingText: "HEADING/INTRO"
    };
    render('index.html', context, function(err, html, text) {
        if(err) {
            console.error(err)
        } else {
            var emailPaths = path.join(__dirname, "emails")
            fs.writeFile(path.join(emailPaths, "test.html"), html, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(emailPaths + "test.html");
                }
            });

            //fs.writeFile(path.join(emailPaths, "test.text"), text, function(err) {
            //    if(err) {
            //        console.log(err);
            //    } else {
            //        console.log(emailPaths + "test.text");
            //    }
            //});
        }
    });
});

