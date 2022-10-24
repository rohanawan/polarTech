const fs = require('fs');
// var parser = require('xml2json');
var parser = require('fast-xml-parser');

const CreateXMLFile = (xml) => {
    fs.writeFileSync('sitemap.xml', xml, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}
var stringified = JSON.stringify({
    "@schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9             http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
    "url": {
        "loc": "https://polartechappliance.ca/",
        "lastmod": "2021-06-30T23:25:38+00:00",
        "priority": "1.00"
    }
});

var xml = parser.parse(stringified);
CreateXMLFile(xml)


// fs.readFile('./survey.xml', function (err, data) {
//     var json = JSON.parse(parser.toJson(data, { reversible: true }));
//     var answers = json["Survey"]["Answer"];
//     for (var i = 0; i < answers.length; i++) {
//         var answer = answers[i];
//         answer.AnswerId = i;
//     }

//     var stringified = JSON.stringify(json);
//     var xml = parser.toXml(stringified);
//     fs.writeFile('survey-fixed.xml', xml, function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('updated!');
//         }
//     });
// });

















// import * as fs from 'fs';
// // var parser = require('xml2json');

// function generateSitemap() {

//     fs.writeFileSync('./sitemap.txt', "test");
// }
// generateSitemap();



// // fs.readFile('./survey.xml', function (err, data) {
// //     // var json = JSON.parse(parser.toJson(data, { reversible: true }));
// //     // var answers = json["Survey"]["Answer"];
// //     // for (var i = 0; i < answers.length; i++) {
// //     //     var answer = answers[i];
// //     //     answer.AnswerId = i;
// //     // }

// //     // var stringified = JSON.stringify({
// //     //     "@schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9             http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
// //     //     "url": {
// //     //         "loc": "https://polartechappliance.ca/",
// //     //         "lastmod": "2021-06-30T23:25:38+00:00",
// //     //         "priority": "1.00"
// //     //     }
// //     // });
// //     var xml = {
// //         "@schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9             http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
// //         "url": {
// //             "loc": "https://polartechappliance.ca/",
// //             "lastmod": "2021-06-30T23:25:38+00:00",
// //             "priority": "1.00"
// //         }
// //     }
// //     fs.writeFile('survey-fixed.xml', xml, function (err, data) {
// //         if (err) {
// //             console.log(err);
// //         }
// //         else {
// //             console.log('updated!');
// //         }
// //     });
// // });