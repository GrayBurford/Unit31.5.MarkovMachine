const { MarkovMachine } = require('./markov.js')

describe("TEST MAKECHAINS()", function () {
    test('Does makeChains() populates object properly?', function () {
        const test1 = new MarkovMachine("the cat in the hat");
        const test2 = new MarkovMachine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

        expect(test1.makeChains()).toEqual(
            {
                "the": ["cat", "hat"], 
                "cat": ["in"], 
                "in": ["the"], 
                "hat": [null]
            }
        );

        expect(test2.makeChains()).toEqual(
            {
                Lorem: [ 'ipsum' ],
                ipsum: [ 'dolor' ],
                dolor: [ 'sit', 'in' ],
                sit: [ 'amet,' ],
                'amet,': [ 'consectetur' ],
                consectetur: [ 'adipiscing' ],
                adipiscing: [ 'elit,' ],
                'elit,': [ 'sed' ],
                sed: [ 'do' ],
                do: [ 'eiusmod' ],
                eiusmod: [ 'tempor' ],
                tempor: [ 'incididunt' ],
                incididunt: [ 'ut' ],
                ut: [ 'labore', 'aliquip' ],
                labore: [ 'et' ],
                et: [ 'dolore' ],
                dolore: [ 'magna', 'eu' ],
                magna: [ 'aliqua.' ],
                'aliqua.': [ 'Ut' ],
                Ut: [ 'enim' ],
                enim: [ 'ad' ],
                ad: [ 'minim' ],
                minim: [ 'veniam,' ],
                'veniam,': [ 'quis' ],
                quis: [ 'nostrud' ],
                nostrud: [ 'exercitation' ],
                exercitation: [ 'ullamco' ],
                ullamco: [ 'laboris' ],
                laboris: [ 'nisi' ],
                nisi: [ 'ut' ],
                aliquip: [ 'ex' ],
                ex: [ 'ea' ],
                ea: [ 'commodo' ],
                commodo: [ 'consequat.' ],
                'consequat.': [ 'Duis' ],
                Duis: [ 'aute' ],
                aute: [ 'irure' ],
                irure: [ 'dolor' ],
                in: [ 'reprehenderit', 'voluptate', 'culpa' ],
                reprehenderit: [ 'in' ],
                voluptate: [ 'velit' ],
                velit: [ 'esse' ],
                esse: [ 'cillum' ],
                cillum: [ 'dolore' ],
                eu: [ 'fugiat' ],
                fugiat: [ 'nulla' ],
                nulla: [ 'pariatur.' ],
                'pariatur.': [ 'Excepteur' ],
                Excepteur: [ 'sint' ],
                sint: [ 'occaecat' ],
                occaecat: [ 'cupidatat' ],
                cupidatat: [ 'non' ],
                non: [ 'proident,' ],
                'proident,': [ 'sunt' ],
                sunt: [ 'in' ],
                culpa: [ 'qui' ],
                qui: [ 'officia' ],
                officia: [ 'deserunt' ],
                deserunt: [ 'mollit' ],
                mollit: [ 'anim' ],
                anim: [ 'id' ],
                id: [ 'est' ],
                est: [ 'laborum.' ],
                'laborum.': [ null ]
              }
        );
    });

});

describe("TEST MAKETEXT()", function () {
    test("Does makeText() create a response that is equal or less than numWords arguement?", function () {
        const test1 = new MarkovMachine("the cat in the hat");
        const test2 = new MarkovMachine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        expect(test1.makeText(100).split(' ').length).toBeLessThanOrEqual(100);
        expect(test2.makeText(500).split(' ').length).toBeLessThanOrEqual(500);

    })

    test("Does makeText() response end with the same last word of input text?", function () {
        const test1 = new MarkovMachine("the cat in the hat");
        const test2 = new MarkovMachine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        let response1 = test1.makeText(100).split(' ');
        let response2 = test2.makeText(500).split(' ');

        expect(response1[response1.length - 1]).toEqual('hat');
        expect(response2[response2.length - 1]).toEqual('laborum.');
    })
});