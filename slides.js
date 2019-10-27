// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
var asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

var options = {safe: 'safe', backend: 'revealjs'};

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'walkthroughs');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var adoc = 'walkthroughs/' + file + '/walkthrough.adoc';
        asciidoctor.convertFile(adoc, {safe: 'safe', backend: 'revealjs', todir:'./'});


        console.log(adoc); 
    });
});





