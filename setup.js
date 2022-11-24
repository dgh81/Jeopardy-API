// Hent data via JSON
async function createCluesTable() {

 try {
  // Sæt offset = 50 for runde 2:
  let apiPath = `https://jservice.io/api/categories?count=50&offset=0`;

  const response = await fetch(apiPath);

  const data = await response.json();

  console.log("Raw data, categories:", data);

  let catArray = [[],[],[],[],[],[]];

  let cats = [];
  for (i = 0; cats.length < 30; i++){
    if (data[i].clues_count > 0){
     cats.push(data[i]);
    };
  };

  console.log("Adjusted categories: ", cats);
  console.log("catArray: ", catArray);
  

  let catArray1 = [];
  for (i = 0; i < 5; i++){
    catArray1.push(cats[i]);
  };

  let catArray2 = [];
  for (i = 5; i < 10; i++){
    catArray2.push(cats[i]);
  };

  let catArray3 = [];
  for (i = 10; i < 15; i++){
    catArray3.push(cats[i]);
  };

  let catArray4 = [];
  for (i = 15; i < 20; i++){
    catArray4.push(cats[i]);
  };

  let catArray5 = [];
  for (i = 20; i < 25; i++){
    catArray5.push(cats[i]);
  };

  let catArray6 = [];
  for (i = 25; i < 30; i++){
    catArray6.push(cats[i]);
  };

  
  catArray[0].push(catArray1);
  catArray[1].push(catArray2);
  catArray[2].push(catArray3);
  catArray[3].push(catArray4);
  catArray[4].push(catArray5);
  catArray[5].push(catArray6);

  for (k = 0; k < 6; k++){
   const catSel = document.getElementById(`catSelector${k+1}`); 
   for (j = 0; j < 5; j++){     
    catSel.innerHTML += `<option value='test'>${catArray[k][0][j].title}</option>`
   };
  };

  localStorage.clear();

 } catch (e) {
  console.log(e);
  console.log("There was an error fetching the data");
 }
};
createCluesTable();