const readline = require('readline');
const Questionsquiz = [
    {
        question : "What is the largest bone in the body",
        option : ["skull","femur","chest","nasal"],
        correctAnswer : "femur",
    },
    {
        question : "what is the deepest river on earth",
        option:["missisiipi","kivu","victoria","congo river"],
        correctAnswer :"congo river",
    },
];
function displayqiuz(){
    const  randomIndex = Math.floor(Math.random() * Questionsquiz.length);
    const question = Questionsquiz[randomIndex].question;
    const options = Questionsquiz[randomIndex].option;

    console.log(question);
    options.forEach((option,index)=>{
  console.log(`${index +1}. ${option}`);
    });
    return randomIndex;
}
function checkAnswers(userAnswers,questionIndex,score){
 const correctAnswer = Questionsquiz[questionIndex].correctAnswer;
 if(userAnswers === correctAnswer){
    console.log("its correct");
    score ++;
 }else{
    console.log("its not correct");
 }
 return score;
}
function runquiz(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let score = 0;
    let questionIndex = 0;
    function askquestion(){
        if( questionIndex<Questionsquiz.length){
            console.log(`Question ${questionIndex +1}:`);
            questionIndex = displayqiuz();
            rl.question ("Choose your answer in number: ", (userAnswers) =>{
           score = checkAnswers(questionIndex,userAnswers,score);
            });
    }else {
    rl.close();
    console.log("Quiz is completed");
    console.log(`Your score is:${score}/${Questionsquiz.length}`);
    }
}
askquestion();
}
runquiz();