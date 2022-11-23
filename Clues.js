class Clues {
 constructor(_question, _answer, _value, _category){
  this.question = _question
  this.answer = _answer
  this.value = _value
  this.category = _category
 }
}

async function getQuestionTest() {

 try {

  // const response = await fetch(`https://jservice.io/api/random`);

  const questionValue = localStorage.getItem("questionValue");
  console.log("Locally stored clicked question value: ", questionValue);
  const questionCatId = localStorage.getItem("questionCategoryId");
  console.log("Locally stored clicked question category: ", questionCatId);

  const response = await fetch(`https://jservice.io/api/clues?value=${questionValue}&category=${questionCatId}`);

  const data = await response.json();

  console.log("Raw returned data: ", data[0]);

  const clue = new Clues(data[0].question, data[0].answer, data[0].value, data[0].category.id);

  console.log("my clue object created from raw data: ", clue);

 } catch (e) {
  console.log(e);
  console.log("There was an error fetching the data");
 };
};

getQuestionTest();



// const runGetQuestionsTest = () => {
//  getQuestionTest().then(()=> {console.log("test")});
// };







