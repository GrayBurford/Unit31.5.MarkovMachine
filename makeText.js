/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { MarkovMachine } = require('./markov.js')



// cmd line EX: $ node makeText.js file eggs.txt
// process.argv[]...
// [0] node; [1] makeText.js; [2] file; [3] eggs.txt
function readFile (filepath) {
    fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) {
            console.log('ERROR:', err);
            process.exit(1);
        } else {
            let mm = new MarkovMachine(data);
            console.log(mm.makeText());
        }
    })

    // console.log(filepath);
    return;
}


// cmd line EX: $ node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
// process.argv[]...
// [0] node; [1] makeText.js; [2] url; [3] http://www.gutenberg.org/files/11/11-0.txt
async function readURL (URL) {
    try {
        const response = await axios.get(URL);
        let mm = new MarkovMachine(response.data);
        console.log(mm.makeText(500));
        // console.log(response.data)
    } catch (err) {
        console.log(`ERROR! Can't read the URL: ${URL}`, err);
        process.exit(1);
    }

}

// REFERERENCE: Print every process.argv and its index
for (let i = 0; i < process.argv.length; i++) {
    console.log(i, process.argv[i]);
}

// cmd line EX: $ node makeText.js file eggs.txt
// process.argv[]...
// [0] node; [1] makeText.js; [2] file; [3] eggs.txt
if (process.argv.length === 4 && process.argv[2].toLowerCase() === 'file') {
    readFile(process.argv[3]);
}

if (process.argv.length === 4 && process.argv[2].toLowerCase() === 'url') {
    readURL(process.argv[3]);
}

// readFile(process.argv[2])
// readURL(process.argv[2])