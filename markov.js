/** Textual markov chain generator */


class MarkovMachine {
    constructor(text) {
      // Splits input text on spaces and linebreaks
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(word => word !== "");
        // pass split array of valid words to makeChains()
        this.markovChain = this.makeChains();
    }

    // Make Markov Chains:
    // "the cat in the hat" input text would generate:
    // {
    //   "the": ["cat", "hat"], 
    //   "cat": ["in"], 
    //   "in": ["the"], 
    //   "hat": [null]
    // }
    makeChains() {

        let markovChain = {};

        for (let i = 0; i < this.words.length; i++) {
            let currWord = this.words[i];
            let nextWord = this.words[i + 1] ? this.words[i + 1] : null;

            if (markovChain[currWord]) {
                if (!markovChain[currWord].includes(nextWord)) {
                  markovChain[currWord].push(nextWord);
                }
            } else {
              markovChain[currWord] = [nextWord]
            }
        }
        console.log("CHAIN IS:", markovChain)
        return markovChain;
    }


    // Return random text from chain that's numWords in length
    makeText(numWords = 15) {
        // Start response off with a random word
        let startIdx = Math.floor(Math.random() * this.words.length);
        console.log("START INDEX:", startIdx)
        let response = [this.words[startIdx]];
        console.log("RESPONSE:", response)

        let word = this.words[startIdx];
        console.log("WORD:", word)
        let arrayIdx = Math.floor(Math.random() * this.markovChain[word].length)
        console.log("ARRAY INDEX:", arrayIdx)

        while (response.length <= numWords && this.markovChain[word][arrayIdx] !== null) {
              response.push(this.markovChain[word][arrayIdx]);
              word = this.markovChain[word][arrayIdx];
              arrayIdx = Math.floor(Math.random() * this.markovChain[word].length)
              // console.log(word)
              // console.log(arrayIdx)
        }

        response = response.join(' ');
        console.log(response);
        console.log(response.split(' '))
        return response;

    }

}

let cat = new MarkovMachine ("the cat in the hat in the bag in the pack")
cat.makeText(numWords=50)

// let lorem = new MarkovMachine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
// lorem.makeText(100)


module.exports = { MarkovMachine }