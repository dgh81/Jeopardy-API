// Unit test installation:
// Terminal: npm i jest

// Interface Unit Test installation:
// Terminal: npm i puppeteer


// Hent data via JSON
async function getQuestion() {

 try {
  //Random:
  // const response = await fetch(`https://jservice.io/api/random`);

  // 2 Random kategorier:
  // https://jservice.io/api/categories?count=2

  // Alle spørgsmål i kategori 1:
  // const response = await fetch(`https://jservice.io/api/category?id=30`);

  const response = await fetch(`https://jservice.io/api/categories?count=30`)

  const data = await response.json();

  console.log(data);

    for (i = 0; i < 30; i++){

     console.log(data[i].title);

    }

    // Randomized: (Fix evt. at den første altid er index 0)
    // for (i = 0; i < 30; i++){
    //  const response = await fetch(`https://jservice.io/api/categories?offset=${i * Math.round(Math.random()*100)}`);
    //  const data = await response.json();
    //  console.log(data[0].title);
    //    }


 } catch (e) {
  console.log(e);
  console.log("There was an error fetching the data");
 }
};

getQuestion();

const Add = (x, y) => {
 return x+y;
};

exports.Add = Add;

console.log(Add(2,3));
