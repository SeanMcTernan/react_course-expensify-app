const fs = require('fs');
const https = require('https');
​
const input = 'numbers.csv';
​
const api_key = '2617484c987469ff74031ee07c583f67';
​
​
let callAPI =
    'https://app2.simpletexting.com/v1/group/contact/remove?token=' + api_key
    + '&phone={{phone_number}}'
​
​
​
const data = fs.readFileSync(input, 'utf8')
​
const numbers = data.split('\n');
​
numbers.forEach(function(number) {
    sendMessage(callAPI, number);
});
​
​
function sendMessage(url, number) {
    https.get(url.replace('{{phone_number}}', number))
}


