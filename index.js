const request = require('request');
const cheerio = require('cheerio');
const util = require('util');

var url = "https://www.worldcoinindex.com/";

request(url, function(err, response, html) {
    if(!err) {
        var $ = cheerio.load(html);
        var table = $('#myTable tbody').children();
        var items = [];
        table.each(function(index){
            var holder = []
            holder.push($('#myTable tbody').children().eq(index).children().eq(2).find("h1 span").text());
            holder.push($('#myTable tbody').children().eq(index).children().eq(3).find("h2").text());
            items.push(holder);
        });

        console.log(util.inspect(items, {maxArrayLength: null}));
    }
})


