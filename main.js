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


  // Her får vi altid de samme 30 kategorier -> der skal nok laves en random generator:
  const response = await fetch(`https://jservice.io/api/categories?count=30`)

  const data = await response.json();

  console.log(data);

    for (i = 0; i < 30; i++){

     // TEST FOR TOMME KATEGORIER?:
     if (data[i].clues_count >= 10){

      console.log(data[i].title, data[i].id);

     } else {
      console.log("denne kategori indeholder ingen spørgsmål...")
     }

    }

    // Randomized: (Fix evt. at den første altid er index 0)
    // for (i = 0; i < 30; i++){
    //  const response = await fetch(`https://jservice.io/api/categories?offset=${i * Math.round(Math.random()*100)}`);
    //  const data = await response.json();
    //  console.log(data[0].title);
    //    }

    //TMP:
    localStorage.clear();

 } catch (e) {
  console.log(e);
  console.log("There was an error fetching the data");
 }
};
getQuestion();

//  // window.localStorage kan skrives bare localStorage: (Max på 5MB på localStorage!!)
function addListener(){
 QuestionsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let submitter = event.submitter;
  localStorage.setItem("questionValue", submitter.value);
  //WEIRD. selvom property hedder data-cat, bruges dataset.cat til at fange den igen:
  //Se evt.: https://stackoverflow.com/questions/71815082/how-can-i-get-custom-data-attribute

  localStorage.setItem("questionCategoryId", submitter.dataset.cat_id);

  window.location.href = "clues.html";
  
 });
};
addListener();