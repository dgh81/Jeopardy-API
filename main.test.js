// Video guide: https://www.youtube.com/watch?v=r9HdJ8P6GQI&ab_channel=Academind
// husk at bruge "exports" for functions der skal testes!

// Denne type "import" virker med Jest:
const { Add } = require('./main');
const puppeteer = require('puppeteer');
// const { default: test } = require('node:test');

//Dette er manuelt tilføjet til package.json: (leder efter ALLE filer indeholdende "test" i navnet, når test startes)
// "scripts": {
//  "test": "jest --watchAll --runInBand --detectOpenHandles"
// }

// Brug evt.    "test": "jest --watch" for altid at køre tests når der gemmes.
// --watch is not supported without git/hg, please use --watchAll

//Se denne: https://github.com/testing-library/dom-testing-library/issues/524
// for at fixe "jest run reports "A worker process has failed to exit gracefully ...""-fejlen...

test('my unit test description here', () => {
 const AddResult = Add(2,3);
 // Jest bruger 'expect' i stedet for 'assert':
 expect(AddResult).toBe(5);
});

test("my interface test description here", async() => {
 const browser = await puppeteer.launch({
  // headless false betyder at browseren vises se 39:10 i videoen
  headless: false,
  slowMo: 80,
  args: ['--window-size=1200, 800']

 });
 const page = await browser.newPage();
 await page.goto("http://127.0.0.1:5500/index.html");
}, 10000);
//10000 er timeout i milisec...

// Se denne når test await:
//Great vid, thank you Max.  I need to disagree with one thing tho. 32:00 - "async/await does it (then and catch) for you" async/await doesn't catch errors.
//You would need to additionally use `try {} catch (e) {}` and await within try block in order to catch errors from the promise.

// Se evt også delen om "integration tests", hvor der testes på sammensætningen af flere mindre unit tests...